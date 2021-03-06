import { Button, Form, FormGroup, FormLabel, FormControl, Card, Dropdown, Modal, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import CryptoJS from 'crypto-js';
import sha512 from 'crypto-js/sha512';
import { bufferToHex } from 'ethereumjs-util';
import { encrypt } from '@metamask/eth-sig-util'
import { ethers } from 'ethers'
import './User.scss'
import "bootstrap-icons/font/bootstrap-icons.css";
import { triggerBase64Download } from 'common-base64-downloader-react';

function User({ state, ekey, cid, files, setFiles, setEkey }) {
    const [fileName, setFileName] = useState("")
    const [file, setFile] = useState("")
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
    const [show, setShow] = useState(false);
    const [pshow, setPshow] = useState(false);
    const [dshow, setDshow] = useState(false);
    const [ushow, setushow] = useState(false);
    const [sharePublicKey, setSharePublicKey] = useState("");
    const [downloadLink, setDownloadLink] = useState("");
    const [sharedLink, setSharedLink] = useState("")
    const localhost = "http://localhost:5000/api";
    const pinataGateway = "https://gateway.pinata.cloud/ipfs/"
    const getCidData = async (cid) => {
        if (typeof cid !== 'undefined') {
            let resp = await fetch("https://gateway.pinata.cloud/ipfs/" + cid);
            if (resp.status >= 200 && resp.status <= 299) {
                return await resp.json()
            } else {
                let resp2 = await fetch("https://" + cid + ".ipfs.infura-ipfs.io/")
                if (resp2.status >= 200 && resp2.status <= 299) {
                    return await resp2.json()
                } else {
                    let resp3 = await fetch("https://ipfs.io/ipfs/" + cid)
                    if (resp3.status >= 200 && resp3.status <= 299) {
                        return await resp3.json()
                    } else {
                        console.log("Unable to get CID")
                        return 0;
                    }
                }
            }
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

    const onUploadFileChange = async ({ target }) => {
        setFileName(target.files[0].name);
        fileToBase64(target.files[0], async (err, result) => {
            setFile(result)
            if (err) {
                console.log("Base 64 Error", err)
            }
        })


    }



    async function upload() {
        let encryptedFile, key, encryptionPublicKey;
        if (fileName.length > 0) {
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
        }
    }
    const handleFileDownload = async (cid) => {
        if (ekey.length > 5) {
            let aesKey = await window.ethereum
                .request({
                    method: 'eth_decrypt',
                    params: [ekey, state.address],
                });
            let file = await getCidData(cid)
            let decryptedFile = await CryptoJS.AES.decrypt(file.data, aesKey).toString(CryptoJS.enc.Utf8);
            triggerBase64Download(decryptedFile, file.filename.split('.').slice(0, -1).join('.'))
        }
    }
    const handleShare = async (cid) => {
        if (ekey.length > 5) {
            let aesKey = await window.ethereum
                .request({
                    method: 'eth_decrypt',
                    params: [ekey, state.address],
                });
            let file = await getCidData(cid)
            let decryptedFile = await CryptoJS.AES.decrypt(file.data, aesKey).toString(CryptoJS.enc.Utf8);
            setFile(decryptedFile)
            setFileName(file.filename)
            handleShow()
        }
    }

    const handleClose = () => setShow(false);
    const handlepClose = () => setPshow(false);
    const handledClose = () => setDshow(false);
    const handleuClose = () => setushow(false);
    const handleShow = () => setShow(true);
    const handlePshow = () => setPshow(true);
    const handleDshow = () => setDshow(true);
    const handleushow = () => setushow(true);
    const handleSharePublicKey = ({ target }) => {
        setSharePublicKey(target.value);
    }
    const handleDownloadLink = ({ target }) => {
        setDownloadLink(target.value);
    }
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
    const UserFiles = () => { // Made by Saurabh Sen
        return files.map((results, index) => {
            const { filename, id } = results;

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

    }
    const handleDownload = async () => {
        handleDshow()
    }
    const handleSharedFileDownload = async () => {
        let file = await getCidData(downloadLink)
        let encKey = await file.key;
        let aesKey = await window.ethereum
            .request({
                method: 'eth_decrypt',
                params: [encKey, state.address],
            });
        let decryptedFile = await CryptoJS.AES.decrypt(file.data, aesKey).toString(CryptoJS.enc.Utf8);
        triggerBase64Download(decryptedFile, file.filename.split('.').slice(0, -1).join('.'))
    }

    return (
        <>
            <div className="homePageContainer bg-dark " style={{ padding: "1rem 0px 7rem 0px", }} >

                {/* <Form>
                <FormGroup controlId="formFile" className="mb-3">
                    <FormLabel>Select File</FormLabel>
                    <FormControl variant="outline-primary"
                            style={{ oultine: "none", border: "1px solid #30efea" }}
                            className="custom__input__file__container" type="file" name='file' onChange={onUploadFileChange} accept="application/pdf,image/*" />
                    <Button variant="outline-primary"
                        style={{ oultine: "none", }}
                        className="custom__input__file__container" onClick={() => upload()} > Encrypt & Upload</Button>
                </FormGroup>
            </Form> */}
                <Modal show={ushow} onHide={handleuClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FormGroup controlId="formFile" className="mb-3">
                                <FormLabel>Select File</FormLabel>
                                <FormControl variant="outline-primary"
                                    style={{ oultine: "none", border: "1px solid #30efea" }}
                                    className="custom__input__file__container" type="file" name='file' onChange={onUploadFileChange} accept="application/pdf,image/*" />
                                <Button variant="outline-primary"
                                    style={{ oultine: "none", }}
                                    className="custom__input__file__container" onClick={() => upload()} > Encrypt & Upload</Button>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleuClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Button variant="outline-primary"
                    style={{ oultine: "none", }}
                    className="custom__input__file__container" onClick={() => handleGetPublicKey()}> Receive File</Button>
                <Button variant="outline-primary"
                    style={{ oultine: "none", }}
                    className="custom__input__file__container" onClick={() => handleushow()}> Upload</Button>

                <Button variant="outline-primary"
                    style={{ oultine: "none", }}
                    className="custom__input__file__container" onClick={() => handleDownload()}>Download Shared File</Button>
                <Card className="bg-dark files__list__container">
                    <UserFiles />
                </Card>
                <Modal show={show} onHide={handleClose}>
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
                        <Button variant="outline-primary"
                            style={{ oultine: "none", }}
                            className="custom__input__file__container" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-primary"
                            style={{ oultine: "none", }}
                            className="custom__input__file__container" onClick={handleShareEncrypt}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={pshow} onHide={handlepClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Public Key (Send to your Doctor)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p onClick={() => navigator.clipboard.writeText(sharePublicKey)}>{sharePublicKey}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handlepClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={dshow} onHide={handledClose}>
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
                        <Button variant="secondary" onClick={handledClose}>
                            Close
                        </Button>
                        <Button variant="outline-primary"
                            style={{ oultine: "none", }}
                            className="custom__input__file__container" onClick={() => handleSharedFileDownload()}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}
export default User;