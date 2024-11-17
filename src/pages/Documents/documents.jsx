import React from "react";
import { useForm } from "react-hook-form";
import TabBar from "../../components/DocumentTabBar/documentTabBar";
import DocumentCard from "../../components/DocumentCard/documentCard";
import {
  Container,
  ContentWrapper,
  Title,
  Subtitle,
  DocumentsGrid,
  EmptyStateContainer,
  EmptyStateImage,
  EmptyStateText,
} from "./styledComponents";
import {
  DOCUMENT_TYPES,
  TAB_ITEMS,
  FILE_CONSTRAINTS,
  TAB_SUBTITLES,
} from "./data";

const DocumentUpload = () => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      activeTab: "basicDocuments",
      uploadedFiles: {},
    },
  });

  const activeTab = watch("activeTab");
  const uploadedFiles = watch("uploadedFiles");

  const validateFile = (file) => {
    if (!file) return false;

    if (file.size > FILE_CONSTRAINTS.maxSize) {
      alert("File size must be less than 2MB");
      return false;
    }

    if (!FILE_CONSTRAINTS.validFormats.includes(file.type)) {
      alert(
        "Invalid file format. Please upload JPG, JPEG, PNG, or PDF files only."
      );
      return false;
    }

    return true;
  };

  const handleFileUpload = (documentId, file) => {
    if (!validateFile(file)) return;

    setValue("uploadedFiles", {
      ...uploadedFiles,
      [documentId]: file,
    });
  };

  const handleTabChange = (tabId) => {
    setValue("activeTab", tabId);
  };

  const getDocumentsByTab = () => {
    return DOCUMENT_TYPES[activeTab] || [];
  };

  return (
    <Container as="main">
      <TabBar
        items={TAB_ITEMS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <ContentWrapper as="section">
        <header>
          <Title>Securely access your documents anywhere, anytime.</Title>
          <Subtitle as="div">{TAB_SUBTITLES[activeTab]}</Subtitle>
        </header>

        {activeTab === "admissionProof" && !uploadedFiles.length ? (
          <EmptyStateContainer role="alert">
            <EmptyStateImage src="/empty-state-icon.svg" alt="No documents" />
            <EmptyStateText as="div">
              Oops! You don't have any admission documents yet.
            </EmptyStateText>
          </EmptyStateContainer>
        ) : (
          <DocumentsGrid role="list">
            {getDocumentsByTab().map((doc) => (
              <DocumentCard
                key={doc.id}
                title={doc.title}
                onUpload={(file) => handleFileUpload(doc.id, file)}
                uploadedFile={uploadedFiles[doc.id]}
                role="listitem"
              />
            ))}
          </DocumentsGrid>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default DocumentUpload;
