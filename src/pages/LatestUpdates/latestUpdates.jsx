import React from "react";
import { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { theme } from "./theme";
import { courseData } from "./data";
import {
  Container,
  cardVariants,
  CardContainer,
  StyledCard,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardContent,
  CardDescription,
} from "./styledComponents";

const LatestUpdates = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {courseData.map((course) => (
          <CardContainer
            key={course.id}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0.3 }}
          >
            <StyledCard>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardSubtitle>{course.subtitle}</CardSubtitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{course.description}</CardDescription>
              </CardContent>
            </StyledCard>
          </CardContainer>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default LatestUpdates;
