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
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Card = styled.div`
  background: ${theme.background.main};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Field = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.div`
  color: ${theme.text.secondary};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Value = styled.div`
  color: ${theme.text.primary};
  font-size: 16px;
  font-weight: 500;
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
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    padding: 20px;
    width: 95%;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid ${theme.border};
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${theme.primary};
  }
`;

export const Error = styled.span`
  color: ${theme.error};
  font-size: 12px;
  margin-top: 4px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: ${(props) =>
    props.variant === "secondary" ? theme.secondary : theme.primary};
  color: ${(props) =>
    props.variant === "secondary" ? theme.text.primary : "#fff"};
  min-width: 100px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 16px;
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
`;

export const SelectWrapper = styled.div`
  .react-select__control {
    border: 1px solid ${theme.border};
    min-height: 38px;

    &:hover {
      border-color: ${theme.primary};
    }

    &--is-focused {
      border-color: ${theme.primary};
      box-shadow: none;
    }
  }

  .react-select__menu {
    z-index: 1100;
  }

  .react-select__option--is-selected {
    background-color: ${theme.primary};
  }

  .react-select__option--is-focused {
    background-color: rgba(26, 35, 126, 0.1);
  }

  .react-select__placeholder {
    color: ${theme.text.light};
  }

  .react-select__value-container {
    padding: 2px 8px;
  }

  .react-select__indicator-separator {
    background-color: ${theme.border};
  }
`;
