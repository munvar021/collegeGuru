import { Star, Clock, Award } from 'lucide-react';
import {
  Card,
  CardContent,
  Title,
  Description,
  InfoBadge,
  MetaInfo,
  RatingWrapper,
  Price,
  StatsWrapper
} from './styledComponents';

const CourseCard = ({ course }) => {
  const averageRating = course.averageRating || 
    (course.ratings.reduce((acc, curr) => acc + curr, 0) / course.ratings.length);

  return (
    <Card>
      <CardContent>
        <InfoBadge>Most Popular</InfoBadge>
        <Title>{course.title}</Title>
        <Description>{course.description}</Description>
        
        <MetaInfo>
          <div className="duration">
            <Clock size={16} />
            {course.duration}
          </div>
          <div className="level">
            <Award size={16} />
            {course.duration.includes('6') ? 'Advanced' : 'Beginner'}
          </div>
        </MetaInfo>

        <StatsWrapper>
          <RatingWrapper>
            <Star
              size={18}
              fill={averageRating >= 4.5 ? "#FFB800" : "#FFD700"}
              color={averageRating >= 4.5 ? "#FFB800" : "#FFD700"}
            />
            <span className="rating">{averageRating.toFixed(1)}</span>
            <span className="total-ratings">({course.ratings.length} ratings)</span>
          </RatingWrapper>
          <Price>
            <span className="currency">₹</span>
            {course.fees.toLocaleString('en-IN')}
          </Price>
        </StatsWrapper>
      </CardContent>
    </Card>
  );
};

export default CourseCard;