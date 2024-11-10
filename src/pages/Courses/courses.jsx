import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopSearches from '../../components/TopSearches/topSearches';
import Filters from '../../components/Filters/filters';
import CoursesList from '../../components/CoursesList/coursesList';
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
    const fetchCourses = async () => {
      try {
        const params = {
          page: pagination.page,
          limit: pagination.limit,
          duration: filters.duration.join(','),
          mode: filters.mode.join(','),
          title: selectedSearch,
          minFees: filters.fees.min,
          maxFees: filters.fees.max
        };
        
        const response = await axios.get('http://localhost:8080/courses', { params });
        setCourses(response.data.data);
        setPagination({
          ...pagination,
          totalPages: response.data.pagination.totalPages,
          total: response.data.pagination.total
        });
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [filters, selectedSearch, pagination.page]);

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
            onPageChange={(page) => setPagination(prev => ({ ...prev, page }))}
          />
        )}
      </ContentWrapper>
    </CoursesContainer>
  );
};

export default Courses;