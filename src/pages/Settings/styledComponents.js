import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;
  }
`;

export const MainSection = styled.section`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Section = styled.section`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

export const NotificationOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ToggleOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ToggleLabel = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

export const ToggleSwitch = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  width: 50px;
  height: 26px;
  appearance: none;
  background-color: #e4e4e4;
  border-radius: 13px;
  cursor: pointer;
  transition: background-color 0.3s;
  outline: none;

  &:checked {
    background-color: #4c6fff;
  }

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    transition: transform 0.3s;
  }

  &:checked::before {
    transform: translateX(24px);
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(76, 111, 255, 0.2);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  border: 2px solid ${(props) => (props.error ? "#ff4d4d" : "#e4e4e4")};
  border-radius: 8px;
  resize: vertical;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4c6fff;
  }

  &::placeholder {
    color: #999;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff4d4d;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

export const SubmitButton = styled.button`
  background-color: #4c6fff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 200px;
  display: block;
  margin: 1.5rem auto 0;

  &:hover:not(:disabled) {
    background-color: #3651cc;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;
