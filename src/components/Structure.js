import React, { useState } from "react";
import { TextField} from "@mui/material";


const Structure = () => {
    const [inputValue, setInputValue] = useState("");
    const [responses, setResponses] = useState([]);
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
// Make a request to the host using the input value
        fetch('https://openai-api.cfapps.us10-001.hana.ondemand.com/chat', {
            method: 'POST',
            body: JSON.stringify({ input: inputValue }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
// Add the new response to the array of responses
                setResponses(prevResponses => [...prevResponses, data]);
            })
            .catch(error => {
// Handle any errors that occur during the request
                console.error(error);
            });
    };

    return (
        <div style={{ display: "flex", margin: "0 auto", justifyContent: "center", flexDirection: "column", paddingLeft: "50px" }}>
            <div
                style={{
                    display: "flex",
                    opacity: 0.5,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "200%",


            }}
            >
                <h1>MIND HUNTER</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start",  }}>
                <TextField fullWidth id="fullWidth" sx={{ alignItems: "center", border: "none",  display: "flex",bgcolor: "white", padding: "10px 25px", marginBottom: "18px", borderRadius: "6px", width: "50%",  boxShadow: "0 0 10px 10px #0000001F" }}
                    type="text"
                    placeholder="Jak Vám mohu pomoci?"
                    variant="standard"
                    onChange={handleInputChange}
                />
                <button className="hovered-button"
                    style={{
                        display: "flex",
                        borderRadius: "6px",
                        height: "52px",
                        border: "none",
                        backgroundColor: "white",
                        padding: "10px",
                        margin: "0 10px",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        fontWeight: "bold",
                        boxShadow: "0 0 10px 10px #0000001F",
                    }}
                    onClick={handleButtonClick}

                >
                    HLEDEJ
                </button>


            </div>

            {responses.map((response, index) => (
                <div style={{ display: "flex", textAlign: "left", width: "50%", backgroundColor: "white", padding: "25px", marginBottom: "20px", borderRadius: "8px", alignItems: "baseline" }} key={index}>
                    <h5>MindHunter:</h5>
                    <p style={{ marginLeft: "8px", width: "95%", lineHeight: "1.5", fontSize: "14px" }}>{JSON.stringify(response.answer)}</p>
                </div>
            ))}

        </div>
    );
};

export default Structure;
