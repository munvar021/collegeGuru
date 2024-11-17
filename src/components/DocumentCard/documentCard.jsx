import React, { useRef } from "react";
import {
  CardWrapper,
  UploadButton,
  CardTitle,
  FileInfo,
  HiddenInput,
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
      <CardTitle as="h3">{title}</CardTitle>
      <UploadButton>
        <HiddenInput
          type="file"
          ref={fileInputRef}
          onChange={handleUpload}
          accept=".jpg,.jpeg,.png,.pdf"
        />
        <div className="upload-icon">↑</div>
        <span>Upload</span>
      </UploadButton>
      <FileInfo as="div">
        File should be max 2mb and jpg, jpeg, png, pdf
      </FileInfo>
      {uploadedFile && (
        <FileInfo as="div">Uploaded: {uploadedFile.name}</FileInfo>
      )}
    </CardWrapper>
  );
};

export default DocumentCard;
