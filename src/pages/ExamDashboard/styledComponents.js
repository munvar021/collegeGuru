import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ExamDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md};
  }
`;