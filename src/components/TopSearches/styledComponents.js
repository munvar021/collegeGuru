import styled from "styled-components";

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: #4b5563;
  }
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: #1a1a1a;
  font-weight: 600;
`;

export const SearchSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  .header-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: #4b5563;
    }

    h2 {
      margin: 0;
      font-size: 1.25rem;
      color: #1a1a1a;
      font-weight: 600;
    }
  }
`;

export const SearchBubbles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 640px) {
    gap: 0.5rem;
  }
`;

export const SearchBubble = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  background: ${(props) => (props.$active ? "#eef2ff" : "#f3f4f6")};
  border: 2px solid ${(props) => (props.$active ? "#4f46e5" : "transparent")};
  color: ${(props) => (props.$active ? "#4f46e5" : "#4b5563")};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${(props) => (props.$active ? "#eef2ff" : "#e5e7eb")};
    color: ${(props) => (props.$active ? "#4f46e5" : "#1a1a1a")};
  }

  @media (max-width: 640px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: #fee2e2;
  border: none;
  color: #991b1b;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #fecaca;
  }

  svg {
    color: #991b1b;
  }
`;
