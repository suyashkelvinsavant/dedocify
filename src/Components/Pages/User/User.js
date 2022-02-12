import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { useState } from 'react';
import CryptoJS from 'crypto-js';
function Home({state}) {
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState(null)
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
                let encrypted = CryptoJS.AES.encrypt(result, key).toString();
                let decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
                console.log(decrypted)
            }
        })
    }
    function upload() {
    }
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
export default Home;