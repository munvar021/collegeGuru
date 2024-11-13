import ExamCard from '../../components/ExamCard/examCard';
import { ExamDashboardContainer } from './styledComponents';
import { examsList } from './data';

const ExamDashboard = () => {
  return (
    <ExamDashboardContainer>
      {examsList.map((exam, index) => (
        <ExamCard key={index} examData={exam} />
      ))}
    </ExamDashboardContainer>
  );
};

export default ExamDashboard;