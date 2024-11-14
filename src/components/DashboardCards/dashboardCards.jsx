import {
  CardsGrid,
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardLink,
  IconWrapper,
} from "./styledComponents";
import { ArrowRight } from "lucide-react";
import { cardData } from "./data";

const DashboardCards = () => {
  return (
    <CardsGrid>
      {cardData.map((card, index) => (
        <Card key={index}>
          <CardContent>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <CardLink href="#">
              {card.link} <ArrowRight size={16} />
            </CardLink>
          </CardContent>
          <IconWrapper>
            <card.icon size={24} />
          </IconWrapper>
        </Card>
      ))}
    </CardsGrid>
  );
};

export default DashboardCards;
