// src/components/Filters/styledComponents.js
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FiltersContainer = styled.div`
  width: 280px;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: fit-content;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    max-width: 320px;
    z-index: 1000;
    overflow-y: auto;
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
    transition: transform 0.3s ease-in-out;
  }
`;

export const FilterSection = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FilterTitle = styled.h3`
  font-size: 1rem;
  color: #333;
  margin: 0 0 1rem 0;
`;

export const FilterToggle = styled.button`
  display: none;
  padding: 0.75rem 1.5rem;
  background: #4054b2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MobileFilterHeader = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ddd;

    h3 {
      margin: 0;
      font-size: 1.25rem;
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;

  &:hover {
    color: #333;
  }
`;

// Update other styled components with increased border-radius
export const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #666;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`;

export const AlertButton = styled.button`
  background: #4054b2;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background 0.2s;

  &:hover {
    background: #2f3d89;
  }
`;

export const ClearFiltersButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #f5f5f5;
  border: none;
  border-radius: 8px;
  color: #666;
  cursor: pointer;
  margin-bottom: 1rem;
  font-size: 0.875rem;

  &:hover {
    background: #e0e0e0;
    color: #333;
  }
`;
