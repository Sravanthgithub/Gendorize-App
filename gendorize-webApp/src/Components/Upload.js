import Card from "../UI/Card";
import "./Upload.css";
import { useState } from "react";
import React from "react";
import UploadDisplay from "./UploadDisplay";
const Upload = () => {
  const [file, setFile] = useState("");
  const uploadHandler = (event) => {
    event.preventDefault();
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    console.log(file.toString());
    // setFile("");
  };
  const fileHandler = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  var image = "Upload karo bhaiya"
  if(file){
    image = <img src={file} alt="galat kiya tune" className="image-sizing"/>
  }
  
  return (
    <Card className="upload-container">
      <h2 className="upload-header">Upload</h2>
      <div className="upload-text">Upload a pic from your device to know whether its a male/female</div>
      <form onSubmit={uploadHandler}>
        <input
          type="file"
          id="file"
          onChange={fileHandler}
        />
        <button type="submit">Upload</button>
      </form>
      <UploadDisplay ima ={image} />
    </Card>
  );
};

export default Upload;
