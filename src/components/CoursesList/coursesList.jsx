import CourseCard from "../CourseCard/cousreCard";
import Pagination from "../Pagination/pagination";
import { CoursesGrid, CoursesSection } from "./styledComponents";

const CoursesList = ({ courses, pagination, onPageChange }) => {
  return (
    <CoursesSection>
      <CoursesGrid>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </CoursesGrid>
      <Pagination
        currentPage={pagination.page}
        totalPages={pagination.totalPages}
        onPageChange={onPageChange}
      />
    </CoursesSection>
  );
};

export default CoursesList;
