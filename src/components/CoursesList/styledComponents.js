import styled from "styled-components";

export const CoursesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
