import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.background.secondary},
    ${({ theme }) => theme.colors.background.primary}
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.02 },
};

export const CardContainer = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const StyledCard = styled.div`
  background: ${({ theme }) => theme.colors.background.hover};
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.small};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.large};
    background: ${({ theme }) => theme.colors.background.hover};
  }
`;

export const CardHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md}
    ${({ theme }) => theme.spacing.sm};
`;

export const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  transition: color ${({ theme }) => theme.transitions.default};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.default};
  }

  ${StyledCard}:hover & {
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      width: 100%;
    }
  }
`;

export const CardSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.light};
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: transform ${({ theme }) => theme.transitions.default};

  ${StyledCard}:hover & {
    transform: translateX(4px);
  }
`;

export const CardContent = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.md}
    ${({ theme }) => theme.spacing.md};
`;

export const CardDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  transition: color ${({ theme }) => theme.transitions.default};

  ${StyledCard}:hover & {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
