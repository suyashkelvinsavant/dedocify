import { Button, Form, FormGroup, FormLabel, FormControl, Card, Dropdown } from 'react-bootstrap';
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
    const getCidData = async (cid) => {
        if (typeof cid !== 'undefined') {
            let d = await fetch("https://gateway.pinata.cloud/ipfs/" + cid)
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
            let resp = await fetch("http://localhost:5000/api", { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
            let data = await resp.json()
            let cidData = await getCidData(data.cid)
            setFiles(cidData.files)
            setEkey(cidData.key)
        }
    }
    const handleFileDownload = async (cid) => {
        if (ekey.length > 5) {
            let aesKey = await window.ethereum
                .request({
                    method: 'eth_decrypt',
                    params: [ekey, state.address],
                });
            let res = await fetch("https://gateway.pinata.cloud/ipfs/" + cid)
            let file = await res.json()
            let decryptedFile = await CryptoJS.AES.decrypt(file.data, aesKey).toString(CryptoJS.enc.Utf8);
            triggerBase64Download(decryptedFile)
            // .then(async(aeskey) => {
            //     let res = await fetch("https://gateway.pinata.cloud/ipfs/" + cid)
            //     let file = await res.json()
            //     let decryptedFile =await CryptoJS.AES.decrypt(file.data, aeskey).toString(CryptoJS.enc.Utf8);
            //     triggerBase64Download(decryptedFile)
            // })
            // .catch((error) => console.log(error.message));
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
                                    <Dropdown.Item>Share</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Body>
                </Card>
            );
        });
    };
    return (
        <>
            <Form>
                <FormGroup controlId="formFile" className="mb-3">
                    <FormLabel>Select File</FormLabel>
                    <FormControl type="file" name='file' onChange={onUploadFileChange} accept="application/pdf,image/*" />
                    <Button onClick={() => upload()} > Encrypt & Upload</Button>
                </FormGroup>
            </Form>
            <UserFiles />
        </>
    );
}
export default User;





    // const onUploadFileChange = async ({ target }) => {
    //     // if (target.files < 1 || !target.validity.valid) {
    //     //     return
    //     // }
    //     setFileName(target.files[0].name)
    //     setFile(fileToBase64(target.files[0]))
    //     console.log(file)
    //     fileToBase64(target.files[0], async (err, result) => {
    //         if (result) {
    //             if (state.address.length > 0) {
    //                 let response = await fetch('http://localhost:5000/api?address='+state.address);
    //                 let res= response.json();
    //                 if(typeof res.cid !== 'undefined'){
    //                     let cid = res.cid;
    //                     let resp = await fetch("https://gateway.pinata.cloud/ipfs/" + cid)
    //                     let user_data = resp.json()
    //                     if(typeof user_data.key !== 'undefined'){
    //                     let key = user_data.key
    //                     await setAesKey(key)
    //                         if(aeskey.length > 0){
    //                             let encrypted = CryptoJS.AES.encrypt(result, aeskey).toString();
    //                             setEncryptedFile(encrypted)
    //                             console.log(encrypted)
    //                             }else{
    //                                 console.log("AES key is Empty");
    //                             }

    //                     }else{
    //                         console.log('user-key is undefined')
    //                     }
    //                 }else{
    //                     console.log("Address Not Found",res)
    //                     await makeAesKey()
    //                         if(aeskey.length > 0){
    //                             let encrypted = CryptoJS.AES.encrypt(result, aeskey).toString();
    //                             setEncryptedFile(encrypted)
    //                             console.log(encrypted)
    //                             }else{
    //                                 console.log("AES key is Empty");
    //                             }

    //                 }
    //             } else {
    //                 console.log("Address Not Connected")
    //             }

    //             // let decrypted = CryptoJS.AES.decrypt(encrypted, aeskey).toString(CryptoJS.enc.Utf8);
    //             //console.log(decrypted)
    //         }
    //         if (err) {
    //             console.log(err)
    //         }
    //     })
    // }

     // console.log(file)
        // if(ekey.length > 5){ // Setting AES Key if Available in the backend else creating one
        //      await window.ethereum
        //         .request({
        //             method: 'eth_decrypt',
        //             params: [ekey, state.address],
        //         })
        //         .then((aeskey) =>{
        //             console.log(aeskey)
        //             setKey(aeskey)}
        //         )
        //         .catch((error) => console.log(error.message));
        // }else{
        //     await setKey(makeAesKey())
        //     let encrypted = await CryptoJS.AES.encrypt(file, key).toString();
        //     await setEncryptedFile(encrypted);

        //     let decrypted =await CryptoJS.AES.decrypt(encryptedFile, key).toString(CryptoJS.enc.Utf8);
        //     console.log('one')

        // }

        //console.log(encryptedAES)


            // await window.ethereum
            //     .request({
            //         method: 'eth_decrypt',
            //         params: [encryptedAES, state.address],
            //     })
            //     .then((aeskey) =>
            //         console.log(aeskey)
            //     )
            //     .catch((error) => console.log(error.message));