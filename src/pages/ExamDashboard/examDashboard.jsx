import { useState, useEffect } from "react";
import ExamCard from "../../components/ExamCard/examCard";
import Filters from "../../components/ExamFilters/examFilters";
import SortBy from "../../components/ExamSortBy/examSortBy";
import {
  ExamDashboardContainer,
  ContentWrapper,
  Header,
  NoResults,
} from "./styledComponents";
import { examsList, sortOptions } from "./data";

const ExamDashboard = () => {
  const [filteredExams, setFilteredExams] = useState(examsList);
  const [filters, setFilters] = useState({
    streams: [],
    degree: [],
    level: [],
    mode: [],
  });
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let result = examsList.filter((exam) => {
      const streamMatch =
        filters.streams.length === 0 ||
        exam.streams.some((stream) =>
          filters.streams.some((filter) => filter.value === stream)
        );

      const degreeMatch =
        filters.degree.length === 0 ||
        exam.degree.some((deg) =>
          filters.degree.some((filter) => filter.value === deg)
        );

      const levelMatch =
        filters.level.length === 0 ||
        filters.level.some((filter) => filter.value === exam.level);

      const modeMatch =
        filters.mode.length === 0 ||
        filters.mode.some((filter) => filter.value === exam.mode);

      return streamMatch && degreeMatch && levelMatch && modeMatch;
    });

    result.sort((a, b) => {
      const dateMap = {
        application_date: "applicationDate",
        exam_date: "examDate",
        result_date: "resultDate",
      };
      const dateField = dateMap[sortBy.value];
      return new Date(a[dateField]) - new Date(b[dateField]);
    });

    setFilteredExams(result);
  }, [filters, sortBy]);

  const handleClearFilters = () => {
    setFilters({
      streams: [],
      degree: [],
      level: [],
      mode: [],
    });
  };

  return (
    <ExamDashboardContainer>
      <Filters
        filters={filters}
        setFilters={setFilters}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClearFilters={handleClearFilters}
      />
      <ContentWrapper>
        <Header>
          <SortBy value={sortBy} onChange={setSortBy} options={sortOptions} />
        </Header>
        {filteredExams.length > 0 ? (
          <div>
            {filteredExams.map((exam) => (
              <ExamCard key={exam.id} examData={exam} />
            ))}
          </div>
        ) : (
          <NoResults>
            No exams match your selected filters.
            <button onClick={handleClearFilters}>Clear all filters</button>
          </NoResults>
        )}
      </ContentWrapper>
    </ExamDashboardContainer>
  );
};

export default ExamDashboard;
