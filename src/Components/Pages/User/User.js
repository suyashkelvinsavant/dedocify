import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { useState } from 'react';
import CryptoJS from 'crypto-js';
import {bufferToHex} from 'ethereumjs-util';
import {encrypt} from '@metamask/eth-sig-util'
function User({ state }) {
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState(null)
    const [aeskey, setAesKey] = useState("")
    const [metamaskKey,setMetamaskKey] = useState("")
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
    const onUploadFileChange = ({ target }) => {
        if (target.files < 1 || !target.validity.valid) {
            return
        }
        fileToBase64(target.files[0], (err, result) => {
            if (result) {
                setFile(result)
                setFileName(target.files[0].name)
                let salt = CryptoJS.lib.WordArray.random(128 / 8);
                let key = CryptoJS.PBKDF2(CryptoJS.lib.WordArray.random(128 / 8), salt, {
                    keySize: 512 / 32,
                    iterations: 1000
                }).toString();
                setAesKey(key);
                let encrypted = CryptoJS.AES.encrypt(result, aeskey).toString();

                let decrypted = CryptoJS.AES.decrypt(encrypted, aeskey).toString(CryptoJS.enc.Utf8);
                //console.log(decrypted)
            }
        })
    }
    let encryptionPublicKey;
    async function upload() {
        
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
        console.log(aeskey)
        if(aeskey.length > 1){
        const encryptedAES = bufferToHex(
            Buffer.from(
              JSON.stringify(
                encrypt({
                  publicKey: encryptionPublicKey ,
                  data: aeskey,
                  version: 'x25519-xsalsa20-poly1305',
                })
              ),
              'utf8'
            )
          );
          console.log(encryptedAES)
          await window.ethereum
  .request({
    method: 'eth_decrypt',
    params: [encryptedAES, state.address],
  })
  .then((decryptedMessage) =>
    console.log(decryptedMessage)
  )
  .catch((error) => console.log(error.message));
        }
        // const msg = encUtils.utf8ToArray(aeskey);
        // const encryptedAES = await ecies25519.encrypt(msg, encryptionPublicKey);
        // console.log(encryptedAES)
    }
    
    // function stringifiableToHex(value) {
    //     return ethers.utils.hexlify(Buffer.from(JSON.stringify(value)));
    // }
    // let encryptedAES;
    // const encryptData = () => {
    //     try {
    //       encryptedAES = stringifiableToHex(
    //         encrypt(
    //           encryptionPublicKey,
    //           { data: aeskey },
    //           'x25519-xsalsa20-poly1305',
    //         ),
    //       );
    //     } catch (error) {
    //     }
    //   };
    //   let decryptedAES;
    //   const decryptData = async () => {
    //     try {
    //       decryptedAES = await window.ethereum.request({
    //         method: 'eth_decrypt',
    //         params: [encryptedAES, state.address],
    //       });
    //     } catch (error) {
    //     }
    //   };
    return (
        <>
            <Form>
                <FormGroup controlId="formFile" className="mb-3">
                    <FormLabel>Select File</FormLabel>
                    <FormControl type="file" name='file' onChange={onUploadFileChange} accept="application/pdf,image/*" />
                    <Button onClick={() => upload()} > Encrypt & Upload</Button>
                </FormGroup>
            </Form>
        </>
    );
}
export default User;