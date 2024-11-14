import styled from "styled-components";

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

export const CardContent = styled.div`
  flex: 1;
`;

export const CardTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  color: #1a1a1a;
`;

export const CardDescription = styled.p`
  margin: 0 0 16px 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
`;

export const CardLink = styled.a`
  color: #4c6fff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: #f5f7ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4c6fff;
`;
