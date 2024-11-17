import styled from "styled-components";

export const CardWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const UploadButton = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  border: 2px dashed #e5e7eb;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #2563eb;
    background-color: rgba(37, 99, 235, 0.05);
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

export const FileInfo = styled.div`
  font-size: 14px;
  color: #666666;
  margin-top: 8px;
`;

export const HiddenInput = styled.input`
  display: none;
`;
