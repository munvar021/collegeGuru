import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const coursesApi = {
  fetchCourses: async ({
    page = 1,
    limit = 10,
    duration = [],
    mode = [],
    title = '',
    minFees = 0,
    maxFees = 100000
  } = {}) => {
    try {
      const params = {
        page,
        limit,
        duration: duration.join(','),
        mode: mode.join(','),
        title,
        minFees,
        maxFees
      };

      const response = await axios.get(`${BASE_URL}/courses`, { params });
      return {
        data: response.data.data,
        pagination: {
          totalPages: response.data.pagination.totalPages,
          total: response.data.pagination.total
        }
      };
    } catch (error) {
      throw new Error(`Error fetching courses: ${error.message}`);
    }
  }
};