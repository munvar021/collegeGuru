import React, { useState } from "react";
import TabBar from "../../components/DocumentTabBar/documentTabBar";
import DocumentCard from "../../components/DocumentCard/documentCard";
import {
  Container,
  ContentWrapper,
  Title,
  Subtitle,
  DocumentsGrid,
} from "./styledComponents";
import { DOCUMENT_TYPES, TAB_ITEMS } from "./data";

const DocumentUpload = () => {
  const [activeTab, setActiveTab] = useState("basicDocuments");
  const [uploadedFiles, setUploadedFiles] = useState({});

  const handleFileUpload = (documentId, file) => {
    if (!file) return;

    // Check file size (2MB limit)
    if (file.size > 2 * 1024 * 1024) {
      alert("File size must be less than 2MB");
      return;
    }

    // Check file format
    const validFormats = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ];
    if (!validFormats.includes(file.type)) {
      alert(
        "Invalid file format. Please upload JPG, JPEG, PNG, or PDF files only."
      );
      return;
    }

    setUploadedFiles((prev) => ({
      ...prev,
      [documentId]: file,
    }));
  };

  const getDocumentsByTab = () => {
    switch (activeTab) {
      case "basicDocuments":
        return DOCUMENT_TYPES.basicDocuments;
      case "admissionProof":
        return DOCUMENT_TYPES.admissionProof;
      case "insuranceApplication":
        return DOCUMENT_TYPES.insuranceApplication;
      default:
        return [];
    }
  };

  return (
    <Container>
      <TabBar
        items={TAB_ITEMS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <ContentWrapper>
        <Title>Securely access your documents anywhere, anytime.</Title>
        <Subtitle>
          {activeTab === "basicDocuments" &&
            "Upload the documents listed below to build your profile that will help us serve you better and also earn exciting rewards Upload at least 3 documents and earn 50 reward points."}
          {activeTab === "admissionProof" &&
            "Upload your admission proof and earn 100 reward points."}
          {activeTab === "insuranceApplication" &&
            "Upload your insurance documents for verification."}
        </Subtitle>

        {activeTab === "admissionProof" && !uploadedFiles.length ? (
          <div className="empty-state">
            <img src="/empty-state-icon.svg" alt="No documents" />
            <p>Oops! You don't have any admission documents yet.</p>
          </div>
        ) : (
          <DocumentsGrid>
            {getDocumentsByTab().map((doc) => (
              <DocumentCard
                key={doc.id}
                title={doc.title}
                onUpload={(file) => handleFileUpload(doc.id, file)}
                uploadedFile={uploadedFiles[doc.id]}
              />
            ))}
          </DocumentsGrid>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default DocumentUpload;
