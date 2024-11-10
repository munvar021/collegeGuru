import React, { useState, useEffect } from 'react';
import TopSearches from '../../components/TopSearches/topSearches';
import Filters from '../../components/Filters/filters';
import CoursesList from '../../components/CoursesList/coursesList';
import { coursesApi } from './api';
import { CoursesContainer, ContentWrapper, LoadingSpinner, EmptyView } from './styledComponents';

const Courses = () => {
  const [selectedSearch, setSelectedSearch] = useState('');
  const [filters, setFilters] = useState({
    duration: [],
    mode: [],
    fees: { min: 0, max: 100000 }
  });
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalPages: 1,
    total: 0
  });

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const result = await coursesApi.fetchCourses({
          page: pagination.page,
          limit: pagination.limit,
          duration: filters.duration,
          mode: filters.mode,
          title: selectedSearch,
          minFees: filters.fees.min,
          maxFees: filters.fees.max
        });

        setCourses(result.data);
        setPagination(prev => ({
          ...prev,
          totalPages: result.pagination.totalPages,
          total: result.pagination.total
        }));
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, [filters, selectedSearch, pagination.page, pagination.limit]);

  const handlePageChange = (page) => {
    setPagination(prev => ({ ...prev, page }));
  };

  return (
    <CoursesContainer>
      <TopSearches
        onSearchSelect={setSelectedSearch}
        selectedSearch={selectedSearch}
      />
      <ContentWrapper>
        <Filters
          filters={filters}
          onFilterChange={setFilters}
        />
        {loading ? (
          <LoadingSpinner>
            <div className="spinner"></div>
          </LoadingSpinner>
        ) : courses.length === 0 ? (
          <EmptyView>No courses found matching your criteria.</EmptyView>
        ) : (
          <CoursesList
            courses={courses}
            pagination={pagination}
            onPageChange={handlePageChange}
          />
        )}
      </ContentWrapper>
    </CoursesContainer>
  );
};

export default Courses;