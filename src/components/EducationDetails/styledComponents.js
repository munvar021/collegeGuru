import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 2rem 1rem;
  //   background-color: #f3f4f6;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const EducationSection = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
`;

export const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;

  @media (max-width: 768px) {
    font-size: 0.813rem;
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${(props) => (props.$hasError ? "#ef4444" : "#e5e7eb")};
  border-radius: 0.375rem;
  font-size: 1rem;
  width: 100%;
  background-color: #ffffff;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => (props.$hasError ? "#ef4444" : "#d1d5db")};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$hasError ? "#ef4444" : "#2563eb")};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.$hasError ? "rgba(239, 68, 68, 0.2)" : "rgba(37, 99, 235, 0.2)"};
  }

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-width: 768px) {
    padding: 0.625rem;
    font-size: 0.875rem;
  }
`;

export const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid ${(props) => (props.$hasError ? "#ef4444" : "#e5e7eb")};
  border-radius: 0.375rem;
  font-size: 1rem;
  width: 100%;
  background-color: #ffffff;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => (props.$hasError ? "#ef4444" : "#d1d5db")};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$hasError ? "#ef4444" : "#2563eb")};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.$hasError ? "rgba(239, 68, 68, 0.2)" : "rgba(37, 99, 235, 0.2)"};
  }

  @media (max-width: 768px) {
    padding: 0.625rem;
    font-size: 0.875rem;
  }
`;

export const ErrorMessage = styled.span`
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export const SubmitButton = styled.button`
  padding: 0.875rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  margin-top: 0.5rem;

  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }

  &:active {
    background-color: #1e40af;
    transform: translateY(0);
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
  }
`;
