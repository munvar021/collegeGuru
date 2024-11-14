import styled from "styled-components";

export const FiltersContainer = styled.aside`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: fit-content;

  @media (max-width: 768px) {
    position: sticky;
    top: 1rem;
    z-index: 10;
  }
`;

export const FilterSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FilterTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  color: #1a1a1a;
  font-weight: 600;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #444;
  cursor: pointer;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const RangeInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RangeInput = styled.input`
  width: 100%;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: #2563eb;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const RangeValues = styled.div`
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
`;
