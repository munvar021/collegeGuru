import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2563eb, #4f46e5);
  }
`;

export const CardContent = styled.div`
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

export const InfoBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #fef3c7;
  color: #92400e;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.35rem;
  color: #1a1a1a;
  font-weight: 700;
  line-height: 1.4;
`;

export const Description = styled.p`
  margin: 0;
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const MetaInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #6b7280;
    font-size: 0.9rem;
    
    svg {
      color: #4b5563;
    }
  }
`;

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  
  .rating {
    font-weight: 600;
    color: #1a1a1a;
  }
  
  .total-ratings {
    color: #6b7280;
    font-size: 0.85rem;
  }
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  
  .currency {
    font-size: 1rem;
    font-weight: 600;
    margin-right: 0.2rem;
  }
`;