import React, { useRef } from "react";
import {
  CardWrapper,
  UploadButton,
  CardTitle,
  FileInfo,
} from "./styledComponents";

const DocumentCard = ({ title, onUpload, uploadedFile }) => {
  const fileInputRef = useRef(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <UploadButton>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleUpload}
          accept=".jpg,.jpeg,.png,.pdf"
          style={{ display: "none" }}
        />
        <div className="upload-icon">↑</div>
        <span>Upload</span>
      </UploadButton>
      <FileInfo>File should be max 2mb and jpg, jpeg, png, pdf</FileInfo>
      {uploadedFile && <FileInfo>Uploaded: {uploadedFile.name}</FileInfo>}
    </CardWrapper>
  );
};

export default DocumentCard;
