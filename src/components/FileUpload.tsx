import React, { useState, DragEvent, ChangeEvent } from "react";
import UploadIcon from '../img/upload-file.svg';

const FileUpload: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="upload-wrapper">
      <div
        className={`upload-box ${dragActive ? "active" : ""}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="fileUpload"
          className="d-none"
          onChange={handleChange}
        />
        <label htmlFor="fileUpload" className="upload-label">
          <img src={UploadIcon} alt="File upload" />
          <p>
            {fileName
              ? fileName
              : "Click to upload or drag and drop"}
          </p>
        </label>
      </div>
    </div>
  );
};

export default FileUpload;
