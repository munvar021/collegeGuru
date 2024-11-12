import styled from 'styled-components';

export const PreferenceContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

export const FormContainer = styled.div`
  position: relative;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const PreferenceSection = styled.section`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;

  &:hover {
    border-color: #d1d5db;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #111827;
  margin-bottom: 1.5rem;
  font-weight: 600;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const PreferenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid ${props => props.hasError ? '#ef4444' : '#d1d5db'};
  background-color: #ffffff;
  font-size: 0.875rem;
  color: #111827;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #9ca3af;
  }

  &:focus {
    outline: none;
    ring: 2px;
    ring-offset: 2px;
    ring-color: #3b82f6;
    border-color: #3b82f6;
  }

  &:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  
  ${props => props.type === 'submit' ? `
    background-color: #3b82f6;
    color: #ffffff;
    border: none;

    &:hover {
      background-color: #2563eb;
    }

    &:disabled {
      background-color: #93c5fd;
      cursor: not-allowed;
    }
  ` : `
    background-color: #ffffff;
    color: #374151;
    border: 1px solid #d1d5db;

    &:hover {
      background-color: #f3f4f6;
      border-color: #9ca3af;
    }
  `}

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const WarningText = styled.span`
  display: block;
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: #3b82f6;
  border-radius: 12px;
  backdrop-filter: blur(2px);
`;

export const ValidationIcon = styled.span`
  position: absolute;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.isValid ? '#10b981' : '#ef4444'};
  font-size: 1rem;
`;

export const StatusContainer = styled.div`
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ErrorContainer = styled(StatusContainer)`
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  color: #991b1b;
`;

export const SuccessContainer = styled(StatusContainer)`
  background-color: #dcfce7;
  border: 1px solid #bbf7d0;
  color: #166534;
`;

export const HelperText = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 0.75rem;
  margin-top: 1rem;
`;