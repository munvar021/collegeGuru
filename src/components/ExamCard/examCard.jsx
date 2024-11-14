import { useCallback } from 'react';
import {
  CardContainer,
  CardHeader,
  CardTitle,
  NavLinksContainer,
  StyledNavLink,
  AlertButton
} from './styledComponents';

const ExamCard = ({ examData }) => {
  const handleSetAlert = useCallback(() => {
    // Implement alert functionality
    alert(`Alert set for ${examData.title}`);
  }, [examData.title]);

  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>{examData.title}</CardTitle>
        <AlertButton onClick={handleSetAlert}>Set Exam Alert</AlertButton>
      </CardHeader>
      <NavLinksContainer>
        {examData.links.map((link, index) => (
          <StyledNavLink 
            key={index}
            to={`/${examData.path}/${link.toLowerCase().replace(/\s/g, '-')}`}
          >
            {link}
          </StyledNavLink>
        ))}
      </NavLinksContainer>
    </CardContainer>
  );
};

export default ExamCard;