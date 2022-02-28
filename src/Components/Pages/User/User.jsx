import React, { useEffect, useState } from "react";
import { Button, FormControl, Card, Dropdown, Modal, InputGroup } from "react-bootstrap";
import CryptoJS from 'crypto-js';
import sha512 from 'crypto-js/sha512';
import { bufferToHex } from 'ethereumjs-util';
import { encrypt } from '@metamask/eth-sig-util';
import { ethers } from 'ethers';
import { triggerBase64Download } from 'common-base64-downloader-react';

import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/User.css";
import AccountButton from "../../AccountButton/AccountButton";


const User = ({ state, setState, ekey, cid, files, setFiles, setEkey }) => {

    const [loadedFileName, setLoadedFileName] = useState(null);

    const [userFiles, setUserFiles] = useState([]);

    const [fileName, setFileName] = useState("");

    const [file, setFile] = useState("");

    const [sharePublicKey, setSharePublicKey] = useState("");

    const [show, setShow] = useState(false);

    const [pshow, setPshow] = useState(false);

    const [dshow, setDshow] = useState(false);

    const [sharedLink, setSharedLink] = useState("")

    const localhost = "http://localhost:5000/api";

    const pinataGateway = "https://gateway.pinata.cloud/ipfs/"

    const fileToBase64 = (file, cb) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            cb(null, reader.result)
        }
        reader.onerror = function (error) {
            cb(error, null)
        }
    }

    useEffect(() => {
        fetch(
            "https://gateway.pinata.cloud/ipfs/QmTBdZegPJvBumaQfU2JtiB3wtgZH7KNHVNz8q9QRxToxw"
        )
            .then((response) => {
                if (response.ok) {
                    return response;
                } else {
                    console.log(response.status);
                }
            })
            .then((response) => response.json())
            .then((data) => {
                setUserFiles(data.files);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleFileDownload = async (cid) => {
        if (ekey.length > 5) {
            let aesKey = await window.ethereum
                .request({
                    method: 'eth_decrypt',
                    params: [ekey, state.address],
                });
            let res = await fetch(pinataGateway + cid)
            let file = await res.json()
            let decryptedFile = await CryptoJS.AES.decrypt(file.data, aesKey).toString(CryptoJS.enc.Utf8);
            triggerBase64Download(decryptedFile, file.filename.split('.').slice(0, -1).join('.'))
        }
    }

    const handleShow = () => setShow(true);

    const handleShare = async (cid) => {
        if (ekey.length > 5) {
            let aesKey = await window.ethereum
                .request({
                    method: 'eth_decrypt',
                    params: [ekey, state.address],
                });
            let res = await fetch(pinataGateway + cid)
            let file = await res.json()
            let decryptedFile = await CryptoJS.AES.decrypt(file.data, aesKey).toString(CryptoJS.enc.Utf8);
            setFile(decryptedFile)
            setFileName(file.filename)
            handleShow()
        }
    }

    const renderUserFiles = () => {
        // return userFiles.map((results, index) => {
        return files.map((results, index) => {
            const {
                filename,
                id
            } = results; //destructuring

            return (
                <Card className="bg-dark file__list__container__item" key={index}>
                    <Card.Body className="filename__list bg-dark text-light ">
                        <p className="filename">{filename}</p>
                        <div className="filename__icons">
                            <Dropdown drop="start">
                                <Dropdown.Toggle>
                                    <i className="bi bi-three-dots-vertical"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleFileDownload(id)}>Download</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleShare(id)}>Share</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Body>
                </Card>
            );
        });
    };

    const onUploadFileChange = async ({ target }) => {
        setFileName(target.files[0].name);
        fileToBase64(target.files[0], async (err, result) => {
            setFile(result)
            if (err) {
                console.log("Base 64 Error", err)
            }
        })
        setLoadedFileName(document.getElementById("inputfile"))
    }

    const getCidData = async (cid) => {
        if (typeof cid !== 'undefined') {
            let d = await fetch(pinataGateway + cid)
            let data = d.json()
            return data;
        } else {
            console.log("Error: CID not defined")
        }
    }

    const makeAesKey = () => {
        let salt = CryptoJS.lib.WordArray.random(128 / 8);
        let aeskey = CryptoJS.PBKDF2(CryptoJS.lib.WordArray.random(128 / 8), salt, {
            keySize: 512 / 32,
            iterations: 1000
        }).toString();
        return aeskey;
    }

    const upload = async () => {
        let encryptedFile, key, encryptionPublicKey;
        if (ekey.length > 5) {
            await window.ethereum
                .request({
                    method: 'eth_decrypt',
                    params: [ekey, state.address],
                })
                .then((aeskey) => {
                    key = aeskey;
                    encryptedFile = CryptoJS.AES.encrypt(file, aeskey).toString();
                })
                .catch((error) => console.log(error.message));
        } else {
            key = makeAesKey()
            encryptedFile = CryptoJS.AES.encrypt(file, key).toString();
        }

        await window.ethereum.request({
            method: 'eth_getEncryptionPublicKey',
            params: [state.address],
        }).then((result) => {
            encryptionPublicKey = result;
        }).catch((error) => {
            if (error.code === 4001) {
                console.log("We can't encrypt anything without the key.");
            } else {
                console.error(error);
            }
        });

        if (key.length > 1) {
            const encryptedAES = bufferToHex(
                Buffer.from(
                    JSON.stringify(
                        encrypt({
                            publicKey: encryptionPublicKey,
                            data: key,
                            version: 'x25519-xsalsa20-poly1305',
                        })
                    ),
                    'utf8'
                )
            );
            let hash = sha512(encryptedFile).toString();
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner()
            let signature = await signer.signMessage(hash);
            let body = {
                filename: fileName,
                address: state.address,
                key: encryptedAES,
                data: encryptedFile,
                hash: hash,
                sign: signature
            }
            console.log(body)
            let resp = await fetch(localhost, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
            let data = await resp.json()
            let cidData = await getCidData(data.cid)
            setFiles(cidData.files)
            setEkey(cidData.key)
        }
    };

    const handlePshow = () => setPshow(true);

    const handlepClose = () => setPshow(false);

    const handleGetPublicKey = async () => {
        await window.ethereum.request({
            method: 'eth_getEncryptionPublicKey',
            params: [state.address],
        }).then((result) => {
            setSharePublicKey(result)
        }).catch((error) => {
            if (error.code === 4001) {
                console.log("We can't encrypt anything without the key.");
            } else {
                console.error(error);
            }
        });
        handlePshow();
    };

    const handleDshow = () => setDshow(true);

    const handleDownload = async () => {
        handleDshow()
    }

    const handledClose = () => setDshow(false);

    const [downloadLink, setDownloadLink] = useState("");

    const handleDownloadLink = ({ target }) => {
        setDownloadLink(target.value);
    }

    const handleSharedFileDownload = async () => {
        let res = await fetch(pinataGateway + downloadLink)
        let file = await res.json()
        let encKey = await file.key;
        let aesKey = await window.ethereum
            .request({
                method: 'eth_decrypt',
                params: [encKey, state.address],
            });
        let decryptedFile = await CryptoJS.AES.decrypt(file.data, aesKey).toString(CryptoJS.enc.Utf8);
        triggerBase64Download(decryptedFile, file.filename.split('.').slice(0, -1).join('.'))
    }

    const handleSharePublicKey = ({ target }) => {
        setSharePublicKey(target.value);
    }

    const handleClose = () => setShow(false);

    const handleShareEncrypt = async () => {
        let kkey = await makeAesKey()
        let eencryptedFile = await CryptoJS.AES.encrypt(file, kkey).toString();
        if (kkey.length > 1) {
            const encryptedAES = bufferToHex(
                Buffer.from(
                    JSON.stringify(
                        encrypt({
                            publicKey: sharePublicKey,
                            data: kkey,
                            version: 'x25519-xsalsa20-poly1305',
                        })
                    ),
                    'utf8'
                )
            );
            let hash = sha512(eencryptedFile).toString();
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner()
            let signature = await signer.signMessage(hash);
            let body = {
                filename: fileName,
                address: state.address,
                key: ekey,
                data: eencryptedFile,
                hash: hash,
                sign: signature,
                share: encryptedAES
            }
            console.log(body)
            let resp = await fetch(localhost, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
            let data = await resp.json()
            setSharedLink(data.cid)
        }
    }

    return (
        <div className='user'>
            <AccountButton state={state}
                setState={setState} />
            <div className="homePageContainer bg-dark " style={{ padding: "13rem 0px 7rem 0px", }} >
                <div className="fileInputBox">
                    <Button
                        variant="outline-primary"
                        style={{ oultine: "none", }}
                        className="custom__input__file__container"
                        onClick={() => handleGetPublicKey()}
                    >
                        Share Public Key
                    </Button>
                    <Button
                        variant="outline-primary"
                        style={{ oultine: "none", }}
                        className="custom__input__file__container"
                        onClick={() => handleDownload()}
                    >
                        Download Shared File
                    </Button>
                    {loadedFileName !== null ? (
                        <Button
                            variant="outline-primary"
                            style={{ oultine: "none", border: "1px solid #30efea" }}
                            className="custom__input__file__container"
                            onClick={() => upload()}
                        >
                            Upload {loadedFileName?.files?.item(0)?.name}
                        </Button>
                    ) : (
                        <label htmlFor="inputfile" className="custom__input__file__container">
                            <i
                                className="bi bi-file-earmark-arrow-up"
                                style={{ fontSize: "2rem", color: "#30efea" }}
                            ></i>
                            <span id="text__for__fileName">Choose a file&hellip;</span>
                        </label>
                    )}
                    <input
                        type="file"
                        name="file-5[]"
                        id="inputfile"
                        className="inputfile"
                        multiple
                        style={{ display: "none" }}
                        accept="application/pdf,image/*"
                        onChange={onUploadFileChange}
                    />

                    <Modal show={show} onHide={handleClose} >
                        <Modal.Header closeButton>
                            <Modal.Title>Enter Recipient's Public Key</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Recipient's Public Key"
                                    aria-label="Recipient's Public Key"
                                    aria-describedby="sharePublicKey"
                                    onChange={handleSharePublicKey}
                                />
                            </InputGroup>
                            <h7 onClick={() => navigator.clipboard.writeText(sharedLink)}>{sharedLink}</h7>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} style={{
                                backgroundColor: "#111315",
                                border: "1px solid #2fcdcf",
                            }}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleShareEncrypt} style={{
                                backgroundColor: "#111315",
                                border: "1px solid #2fcdcf",
                            }}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={pshow} onHide={handlepClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Your Public Key</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p onClick={() => navigator.clipboard.writeText(sharePublicKey)}>{sharePublicKey}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handlepClose} style={{
                                backgroundColor: "#111315",
                                border: "1px solid #2fcdcf",
                            }}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={dshow} onHide={handledClose} >
                        <Modal.Header closeButton>
                            <Modal.Title>Shared File ID</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Enter File ID"
                                    aria-label="Enter File ID"
                                    aria-describedby="sharePublicKey"
                                    onChange={handleDownloadLink}
                                />
                            </InputGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handledClose} style={{
                                backgroundColor: "#111315",
                                border: "1px solid #2fcdcf",
                            }}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => handleSharedFileDownload()} style={{
                                backgroundColor: "#111315",
                                border: "1px solid #2fcdcf",
                            }}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <hr style={{
                    width: "80vw",
                    margin: "auto",
                    color: "white",
                }} />
                <Card className="bg-dark files__list__container">
                    {/* loop through https://gateway.pinata.cloud/ipfs/QmTBdZegPJvBumaQfU2JtiB3wtgZH7KNHVNz8q9QRxToxw this data */}
                    {renderUserFiles()}
                </Card>
            </div>
            <hr style={{
                width: "80vw",
                margin: "auto",
                color: "white",
            }} />
        </div>
    )
}

export default User