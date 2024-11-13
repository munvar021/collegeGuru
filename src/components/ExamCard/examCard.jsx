import {
  CardContainer,
  CardHeader,
  CardTitle,
  NavLinksContainer,
  StyledNavLink,
  AlertButton
} from './styledComponents';

const ExamCard = ({ examData }) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>{examData.title}</CardTitle>
        <AlertButton>Set Exam Alert</AlertButton>
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