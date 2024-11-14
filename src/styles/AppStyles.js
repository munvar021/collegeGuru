import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
`;

export const MainContent = styled.main`
  margin-left: 280px;
  padding-top: 80px;
  min-height: calc(100vh - 80px);

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
