import React, { useState, useEffect } from "react";
import TopSearches from "../../components/TopSearches/topSearches";
import Filters from "../../components/CoursesFilters/coursesFilters";
import CoursesList from "../../components/CoursesList/coursesList";
import { coursesApi } from "./api";
import {
  CoursesContainer,
  ContentWrapper,
  LoadingSpinner,
  EmptyView,
} from "./styledComponents";

const Courses = () => {
  const [state, setState] = useState({
    selectedSearch: "",
    filters: {
      duration: [],
      mode: [],
      fees: { min: 0, max: 100000 },
    },
    courses: [],
    loading: true,
    pagination: {
      page: 1,
      limit: 10,
      totalPages: 1,
      total: 0,
    },
  });

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));
        const result = await coursesApi.fetchCourses({
          page: state.pagination.page,
          limit: state.pagination.limit,
          duration: state.filters.duration,
          mode: state.filters.mode,
          title: state.selectedSearch,
          minFees: state.filters.fees.min,
          maxFees: state.filters.fees.max,
        });

        setState((prev) => ({
          ...prev,
          courses: result.data,
          pagination: {
            ...prev.pagination,
            totalPages: result.pagination.totalPages,
            total: result.pagination.total,
          },
          loading: false,
        }));
      } catch (error) {
        console.error(error.message);
        setState((prev) => ({ ...prev, loading: false }));
      }
    };

    loadCourses();
  }, [
    state.filters,
    state.selectedSearch,
    state.pagination.page,
    state.pagination.limit,
  ]);

  const handlePageChange = (page) => {
    setState((prev) => ({
      ...prev,
      pagination: { ...prev.pagination, page },
    }));
  };

  const handleSearchSelect = (search) => {
    setState((prev) => ({ ...prev, selectedSearch: search }));
  };

  const handleFilterChange = (filters) => {
    setState((prev) => ({ ...prev, filters }));
  };

  return (
    <CoursesContainer>
      <TopSearches
        onSearchSelect={handleSearchSelect}
        selectedSearch={state.selectedSearch}
      />
      <ContentWrapper>
        <Filters filters={state.filters} onFilterChange={handleFilterChange} />
        {state.loading ? (
          <LoadingSpinner>
            <div className="spinner" />
          </LoadingSpinner>
        ) : state.courses.length === 0 ? (
          <EmptyView>No courses found matching your criteria.</EmptyView>
        ) : (
          <CoursesList
            courses={state.courses}
            pagination={state.pagination}
            onPageChange={handlePageChange}
          />
        )}
      </ContentWrapper>
    </CoursesContainer>
  );
};

export default Courses;
