import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  padding: 1rem;

  .pages-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 640px) {
      order: 3;
      width: 100%;
      justify-content: center;
      margin-top: 1rem;
    }
  }
`;

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #1a1a1a;

  &:hover:not(:disabled) {
    background: #f8fafc;
    border-color: #cbd5e1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    padding: 0.5rem;

    span {
      display: none;
    }
  }
`;

export const PageNumber = styled.button`
  min-width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #1a1a1a;

  &:hover:not(.ellipsis) {
    background: #f8fafc;
    border-color: #cbd5e1;
  }

  &.active {
    background: #2563eb;
    border-color: #2563eb;
    color: white;
  }

  &.ellipsis {
    border: none;
    cursor: default;

    &:hover {
      background: transparent;
    }
  }
`;

export const PageInfo = styled.div`
  color: #666;
  font-size: 0.9rem;

  @media (max-width: 640px) {
    order: 2;
  }
`;
