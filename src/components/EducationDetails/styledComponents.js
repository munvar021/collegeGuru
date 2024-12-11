import styled from "styled-components";

const theme = {
  primary: "#1a237e",
  secondary: "#f5f5f5",
  error: "#d32f2f",
  border: "#ddd",
  text: {
    primary: "#333",
    secondary: "#666",
    light: "#999",
  },
  background: {
    main: "#fff",
    overlay: "rgba(0, 0, 0, 0.5)",
  },
};

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Card = styled.div`
  background: ${theme.background.main};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin: 10px 0;

  @media (max-width: 768px) {
    padding: 16px;
    margin: 16px 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${theme.border};
`;

export const Title = styled.h2`
  color: ${theme.primary};
  margin: 0;
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SectionTitle = styled.h3`
  color: ${theme.primary};
  font-size: 18px;
  margin: 24px 0 16px;
  font-weight: 500;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 16px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Field = styled.div`
  margin-bottom: 8px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.border};
  margin: 32px 0;

  @media (max-width: 768px) {
    margin: 24px 0;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.div`
  color: ${theme.text.secondary};
  font-size: 14px;
  font-weight: 500;
`;

export const Value = styled.div`
  color: ${theme.text.primary};
  font-size: 16px;
  font-weight: 500;
  min-height: 24px;
  padding: 4px 0;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid ${theme.border};
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${theme.primary};
  }

  &:disabled {
    background-color: ${theme.secondary};
    cursor: not-allowed;
  }
`;

export const Error = styled.span`
  color: ${theme.error};
  font-size: 12px;
  margin-top: 4px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${theme.background.overlay};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
`;

export const ModalContent = styled.div`
  background: ${theme.background.main};
  padding: 32px;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    padding: 20px;
    width: 95%;
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.secondary};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.text.light};
    border-radius: 4px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 24px;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background: ${(props) =>
    props.variant === "secondary" ? theme.secondary : theme.primary};
  color: ${(props) =>
    props.variant === "secondary" ? theme.text.primary : theme.background.main};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 16px;
  }
`;

export const SelectWrapper = styled.div`
  .react-select__control {
    border: 1px solid ${theme.border};
    min-height: 38px;
    background-color: ${theme.background.main};

    &:hover {
      border-color: ${theme.primary};
    }

    &--is-focused {
      border-color: ${theme.primary};
      box-shadow: none;
    }

    &--is-disabled {
      background-color: ${theme.secondary};
      cursor: not-allowed;
    }
  }

  .react-select__menu {
    z-index: 1100;
    border: 1px solid ${theme.border};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .react-select__option {
    padding: 8px 12px;
    cursor: pointer;

    &--is-selected {
      background-color: ${theme.primary};
    }

    &--is-focused {
      background-color: rgba(26, 35, 126, 0.1);
    }
  }

  .react-select__value-container {
    padding: 2px 8px;
  }

  .react-select__placeholder {
    color: ${theme.text.light};
  }

  .react-select__single-value {
    color: ${theme.text.primary};
  }

  .react-select__indicator-separator {
    background-color: ${theme.border};
  }

  .react-select__clear-indicator,
  .react-select__dropdown-indicator {
    color: ${theme.text.light};

    &:hover {
      color: ${theme.text.secondary};
    }
  }
`;

export const EditButton = styled(Button)`
  padding: 8px;
  min-width: unset;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    padding: 6px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    padding: 4px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;
