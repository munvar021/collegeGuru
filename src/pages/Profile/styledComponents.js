import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background: #ffffff;
  
  @media (min-width: 640px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  
  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 2.25rem;
    margin-bottom: 2rem;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

export const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  width: 100%;
  border: none;
  background: ${props => props.active ? '#f3f4f6' : 'transparent'};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  
  @media (min-width: 640px) {
    width: auto;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem 0.5rem 0 0;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${props => props.active ? '#2563eb' : 'transparent'};
      transition: all 0.2s ease;
    }
  }

  &:hover {
    background: #f3f4f6;
    
    @media (min-width: 640px) {
      background: ${props => props.active ? '#f3f4f6' : '#f8fafc'};
    }
  }
`;

export const TabIcon = styled.span`
  display: flex;
  align-items: center;
  color: ${props => props.active ? '#2563eb' : '#64748b'};
  transition: color 0.2s ease;
  
  ${Tab}:hover & {
    color: #2563eb;
  }
`;

export const TabText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.active ? '#2563eb' : '#64748b'};
  transition: color 0.2s ease;
  
  @media (min-width: 640px) {
    font-size: 1rem;
  }
  
  ${Tab}:hover & {
    color: #2563eb;
  }
`;

export const ContentWrapper = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const TabContent = styled.div`
  padding: 1rem;
  
  @media (min-width: 640px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;