import React, {useEffect, useState} from "react";
import { TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const Structure = () => {
    const [inputValue, setInputValue] = useState("");
    const [responses, setResponses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedProject, setSelectedProject] = useState("");
    const [metadata, setMetadata] = useState([]);

    useEffect(() => {
        fetch('https://ntc7ifsqnfioiy-5110.proxy.runpod.net/api/metadata') // Your API endpoint
            .then(response => response.json())
            .then(data => setMetadata(data));
    }, []);


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedProject(e.target.value);
    };

    const handleButtonClick = () => {
        setIsLoading(true); // Set isLoading to true when starting the request
        const formData = new URLSearchParams();
        formData.append('user_prompt', inputValue);
        formData.append('status', "");
        formData.append('project', selectedProject);
        // Make a request to the host using the input value
        let runPodUrl = "https://ntc7ifsqnfioiy-5110.proxy.runpod.net/api/prompt_route";
        fetch(runPodUrl, {
            method: "POST",
            body: formData.toString(),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // Add the new response to the array of responses
                setResponses((prevResponses) => [...prevResponses, data]);
                setIsLoading(false); // Set isLoading to false when the response is received
            })
            .catch((error) => {
                // Handle any errors that occur during the request
                console.error(error);
                setIsLoading(false); // Set isLoading to false in case of an error
            });
    };

    return (
        <div
            style={{
                display: "flex",
                margin: "0 auto",
                justifyContent: "center",
                flexDirection: "column",

            }}
        >
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
            <div style={{ display: "flex", justifyContent: "center", width: "850px", margin: "0 auto" }}>
                <TextField
                    fullWidth
                    id="fullWidth"
                    sx={{
                        alignItems: "center",
                        border: "none",
                        display: "flex",
                        bgcolor: "white",
                        padding: "10px 25px",
                        marginBottom: "18px",
                        borderRadius: "6px",
                        width: "800px",
                        boxShadow: "0 0 10px 10px #0000001F",
                    }}
                    type="text"
                    placeholder="Jak Vám mohu pomoci?"
                    variant="standard"
                    onChange={handleInputChange}
                />
                <FormControl
                             style={{
                    alignItems: "center",
                    border: "none",
                    display: "flex",
                    backgroundColor: "white",
                    margin: "0 10px 18px 10px",
                    borderRadius: "6px",
                    width: "350px",
                    boxShadow: "0 0 10px 10px #0000001F",
                }}>
                    <InputLabel disableAnimation={"false"} id="category-select-label">Project</InputLabel>
                    <Select
                        id="category-select"
                        size="medium"
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        fullWidth
                        value={selectedProject}
                        onChange={handleCategoryChange}
                    >
                        {metadata && metadata.projects ? metadata.projects.map((project, index) => (

                            <MenuItem key={index} value={project.id}>{project.title}</MenuItem>


                        )) : null}
                    </Select>
                </FormControl>
                <button
                    className="hovered-button"
                    style={{
                        display: "flex",
                        height: "56px",
                        borderRadius: "6px",
                        border: "none",
                        backgroundColor: "white",
                        padding: "10px",
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

            {isLoading && (
                <div
                    style={{
                        display: "flex",
                        width: "800px",
                        backgroundColor: "white",
                        padding: "25px",
                        marginBottom: "20px",
                        borderRadius: "8px",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                        boxShadow: "0 0 10px 10px #0000001F",
                    }}
                >
                    <p style={{ width: "95%", lineHeight: "1.5", fontSize: "14px" }}>
                        Loading...
                    </p>
                </div>
            )}

            {responses.map((response, index) => (
                <div
                    style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 0px 10px 10px", display: "flex", flexDirection: "row", textAlign: "left", width: "800px", backgroundColor: "white", padding: "25px", margin: "15px auto", borderRadius: "8px", }}
                    key={index}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Robot_icon.svg/96px-Robot_icon.svg.png?20160602132836"
                        alt="Loading"
                        style={{ marginRight: "8px", width: "32px", height: "32px", marginTop: "18px" }}
                    />
                    <p
                        style={{
                            marginLeft: "8px",
                            width: "95%",
                            lineHeight: "1.5",
                            fontSize: "14px",
                            wordBreak: "break-word",
                        }}
                    >
                        <strong style={{ marginBottom: "16px" }}>Question:</strong> {response.Prompt}
                        {/*{JSON.stringify(response)}*/}
                        <br />
                        <br />
                        <strong style={{ marginBottom: "16px" }}>Answer:</strong> {response.Answer}
                        <br />
                        <br />
                        <strong style={{ marginBottom: "16px" }}>Sources:</strong> {response.Sources.map((source) =>(

                            <div style={{ marginBottom: "16px" }}>
                            <strong>{source[0]}</strong> - {source[1]}

                        </div>


                    ))}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Structure;

