import { Star, Clock, Award } from "lucide-react";
import {
  Card,
  CardContent,
  Title,
  Description,
  InfoBadge,
  MetaInfo,
  RatingWrapper,
  Price,
  StatsWrapper,
  MetaItem,
} from "./styledComponents";

const CourseCard = ({ course }) => {
  const averageRating =
    course.averageRating ||
    course.ratings.reduce((acc, curr) => acc + curr, 0) / course.ratings.length;

  const isAdvanced = course.duration.includes("6");

  return (
    <Card>
      <CardContent>
        <InfoBadge>Most Popular</InfoBadge>
        <Title>{course.title}</Title>
        <Description>{course.description}</Description>

        <MetaInfo>
          <MetaItem>
            <Clock size={16} />
            {course.duration}
          </MetaItem>
          <MetaItem>
            <Award size={16} />
            {isAdvanced ? "Advanced" : "Beginner"}
          </MetaItem>
        </MetaInfo>

        <StatsWrapper>
          <RatingWrapper>
            <Star
              size={18}
              fill={averageRating >= 4.5 ? "#FFB800" : "#FFD700"}
              color={averageRating >= 4.5 ? "#FFB800" : "#FFD700"}
            />
            <span className="rating">{averageRating.toFixed(1)}</span>
            <span className="total-ratings">
              ({course.ratings.length} ratings)
            </span>
          </RatingWrapper>
          <Price>
            <span className="currency">₹</span>
            {course.fees.toLocaleString("en-IN")}
          </Price>
        </StatsWrapper>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
