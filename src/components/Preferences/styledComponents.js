import styled from 'styled-components';

export const PreferenceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const PreferenceSection = styled.div`
  background: #ffffff;
  border-radius: 0.75rem;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e2e8f0;
`;

export const PreferenceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 0.25rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #1e293b;
  background-color: white;
  transition: all 0.2s ease;
  margin-bottom: ${props => props.hasError ? '0.25rem' : '0'};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }

  &:invalid {
    border-color: #ef4444;
  }

  &:disabled {
    background-color: #f1f5f9;
    cursor: not-allowed;
  }

  option {
    color: #1e293b;
    padding: 0.5rem;
  }
`;

export const WarningText = styled.span`
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
  font-weight: 500;
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: #f8fafc;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f1f5f9;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  flex-shrink: 0;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:focus + span {
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }

    &:disabled + span {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #cbd5e1;
    transition: .4s;
    border-radius: 24px;

    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
  }

  input:checked + span {
    background-color: #2563eb;
  }

  input:checked + span:before {
    transform: translateX(24px);
  }

  @media (hover: hover) {
    &:hover span {
      background-color: ${props => props.checked ? '#1d4ed8' : '#94a3b8'};
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.type === 'button' ? '#f1f5f9' : '#2563eb'};
  color: ${props => props.type === 'button' ? '#1e293b' : 'white'};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 150px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${props => props.type === 'button' ? '#e2e8f0' : '#1d4ed8'};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }

  &:disabled {
    background-color: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 640px) {
    width: 100%;
    min-width: unset;
  }
`;

// Helper styled components for validation states
export const ValidationIcon = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.isValid ? '#10b981' : '#ef4444'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HelperText = styled.span`
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 0.25rem;
  display: block;
`;

// Container for grouped form elements
export const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

// Responsive container for form sections
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`;

// Loading state overlay
export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  z-index: 10;
`;

// Error message container
export const ErrorContainer = styled.div`
  background-color: #fef2f2;
  border: 1px solid #fee2e2;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  color: #ef4444;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Success message container
export const SuccessContainer = styled.div`
  background-color: #f0fdf4;
  border: 1px solid #dcfce7;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  color: #10b981;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;