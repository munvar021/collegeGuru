import styled from "styled-components";

export const ExamDashboardContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

export const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  button {
    background: none;
    border: none;
    color: #4054b2;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 0.5rem;

    &:hover {
      color: #2f3d89;
    }
  }
`;
