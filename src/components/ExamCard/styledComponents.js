import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

export const CardContainer = styled.div`
  background: ${theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 4px ${theme.colors.shadow};
  margin-bottom: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  transition: transform ${theme.transitions.default},
              box-shadow ${theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${theme.colors.shadowHover};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: ${theme.spacing.sm};
    padding: ${theme.spacing.md};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
  }
`;

export const CardTitle = styled.span`
  font-size: 1.25rem;
  color: ${theme.colors.text};
  font-weight: 600;
  margin: 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing.sm};
  }
`;

export const StyledNavLink = styled(Link)`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${theme.colors.linkBg};
  border-radius: 20px;
  color: ${theme.colors.secondaryText};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all ${theme.transitions.default};
  letter-spacing: 0.3px;

  &:hover {
    background: ${theme.colors.linkBgHover};
    color: ${theme.colors.text};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    font-size: 0.8rem;
  }
`;

export const AlertButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.background};
  border: none;
  border-radius: 4px;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all ${theme.transitions.default};
  letter-spacing: 0.3px;

  &:hover {
    background: ${theme.colors.primaryHover};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    padding: ${theme.spacing.sm};
    font-size: 0.85rem;
  }
`;