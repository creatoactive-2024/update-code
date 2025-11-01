import React, { useRef, useState } from "react";
import "./FileUpload.scss";
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImg from "../image/upload.svg";
const FileUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>("");

  // handle clicking the box
  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  // handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  // handle drag and drop
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add("drag-over");
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("drag-over");
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove("drag-over");

    const file = e.dataTransfer.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="file-upload-container">
      {/* hidden input */}
      <input
        type="file"
        ref={fileInputRef}
        className="file-input"
        onChange={handleFileChange}
      />

      {/* custom upload box */}
      <div
        className="upload-box"
        onClick={handleBoxClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <img src={uploadImg} alt="uplaod"/>
        <p className="upload-text">
          {fileName ? fileName : "Click to upload or drag and drop"}
        </p>
      </div>
    </div>
  );
};

export default FileUpload;
