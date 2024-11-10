import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import Courses from './pages/Courses/courses';
import Dashboard from './pages/Dashboard/dashboard';
import { AppContainer, MainContent } from './styles/AppStyles';

const theme = {
  colors: {
    primary: '#0a0633',
    secondary: '#6b5ce7',
    accent: '#ff6b6b',
    background: '#f5f5f5',
    text: '#333'
  }
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <AppContainer>
          <Header toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} />
          <MainContent>
            <Routes>
              <Route path="/courses" element={<Courses />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Add other routes as needed */}
            </Routes>
          </MainContent>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
