import React, { useEffect, useState } from "react";
import "./css/User.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Card, Dropdown } from "react-bootstrap";
import Navb from "../../Navbar/Navb";
import Footer from "../../Footer/Footer";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";


const User = () => {
    const [file, setFile] = useState(null);

    const [userFiles, setUserFiles] = useState([]);

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

    const renderUserFiles = () => {
        return userFiles.map((results, index) => {
            const {
                filename,
                //  datalink 
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
                                    <Dropdown.Item>Download</Dropdown.Item>
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
        <div className='user'>
            <Navb />
            <div className="homePageContainer bg-dark " style={{ padding: "17px 0px", }} >
                <div className="fileInputBox">
                    {file !== null ? (
                        <Button
                            variant="outline-primary"
                            style={{ oultine: "none", border: "1px solid #30efea" }}
                            className="custom__input__file__container"
                        >
                            Upload {file?.files?.item(0)?.name}
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
                        onChange={() => setFile(document.getElementById("inputfile"))}
                    />
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
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default User