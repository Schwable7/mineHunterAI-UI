import React, { useState } from "react";
import { TextField } from "@mui/material";



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
        <div style={{ display: "flex", margin: "0 auto", justifyContent: "center", flexDirection: "column", }}>
            <div
                style={{
                    display: "flex",
                    opacity: 0.5,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "300%",
                    textAlign: "center",
                    justifyContent: "center",


                }}
            >
                <h1 style={{ marginBottom: "30px", marginTop: "30px", }}>MINE HUNTER</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "650px", margin: "0 auto" }}>
                <TextField fullWidth id="fullWidth" sx={{ alignItems: "center", border: "none", display: "flex", bgcolor: "white", padding: "10px 25px", marginBottom: "18px", borderRadius: "6px", width: "600px", boxShadow: "0 0 10px 10px #0000001F" }}
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
                        margin: "0 0 0 10px",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        fontWeight: "bold",
                        boxShadow: "0 0 10px 10px #0000001F",
                    }}
                    onClick={handleButtonClick}

                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" /></svg>
                </button>


            </div>

            {/* ZAČÁTEK ČÁSTI, KTEROU LZE SMAZAT */}

            <div style={{ display: "flex", flexDirection: "row", textAlign: "left", width: "600px", backgroundColor: "white", padding: "25px", margin: "0 auto", borderRadius: "8px", }}>

                <div style={{ display: "block", marginBlockStart: "1em" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-120v-213.334q0-27.5 19.583-47.083T226.666-400h506.668q27.5 0 47.083 19.583T800-333.334V-120H160Zm200-320q-83 0-141.5-58.5T160-640q0-83 58.5-141.5T360-840h240q83 0 141.5 58.5T800-640q0 83-58.5 141.5T600-440H360Zm.117-166.667q14.216 0 23.716-9.617 9.5-9.617 9.5-23.833 0-14.216-9.617-23.716-9.617-9.5-23.833-9.5-14.216 0-23.716 9.617-9.5 9.617-9.5 23.833 0 14.216 9.617 23.716 9.617 9.5 23.833 9.5Zm240 0q14.216 0 23.716-9.617 9.5-9.617 9.5-23.833 0-14.216-9.617-23.716-9.617-9.5-23.833-9.5-14.216 0-23.716 9.617-9.5 9.617-9.5 23.833 0 14.216 9.617 23.716 9.617 9.5 23.833 9.5Z" /></svg></div>

                <p style={{ display: "flex", alignItems: "flex-start", marginLeft: "16px", marginRight: "16px", width: "580px", lineHeight: "1.6", fontSize: "15px" }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam quis nulla. In enim a arcu imperdiet malesuada. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nullam eget nisl. Curabitur sagittis hendrerit ante. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse nisl.</p>
            </div>

            {/* KONEC ČÁSTI, KTEROU LZE SMAZAT */}

            {responses.map((response, index) => (
                <div style={{ display: "flex", flexDirection: "row", textAlign: "left", width: "600px", backgroundColor: "white", padding: "25px", margin: "0 auto", borderRadius: "8px", }} key={index}>

                    <div style={{ display: "block", marginBlockStart: "1em" }}>

                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-120v-213.334q0-27.5 19.583-47.083T226.666-400h506.668q27.5 0 47.083 19.583T800-333.334V-120H160Zm200-320q-83 0-141.5-58.5T160-640q0-83 58.5-141.5T360-840h240q83 0 141.5 58.5T800-640q0 83-58.5 141.5T600-440H360Zm.117-166.667q14.216 0 23.716-9.617 9.5-9.617 9.5-23.833 0-14.216-9.617-23.716-9.617-9.5-23.833-9.5-14.216 0-23.716 9.617-9.5 9.617-9.5 23.833 0 14.216 9.617 23.716 9.617 9.5 23.833 9.5Zm240 0q14.216 0 23.716-9.617 9.5-9.617 9.5-23.833 0-14.216-9.617-23.716-9.617-9.5-23.833-9.5-14.216 0-23.716 9.617-9.5 9.617-9.5 23.833 0 14.216 9.617 23.716 9.617 9.5 23.833 9.5Z" /></svg>

                    </div>

                    <p style={{ display: "flex", alignItems: "flex-start", marginLeft: "16px", marginRight: "16px", width: "580px", lineHeight: "1.6", fontSize: "15px" }}>{JSON.stringify(response.answer)}</p>

                </div>
            ))}

        </div>
    );
};

export default Structure;
