import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ErrorBoundary from './components/ErrorBoundary';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #6B46C1 0%, #EC4899 100%);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #553C9A 0%, #DB2777 100%);
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <ErrorBoundary>
      <GlobalStyle />
      <AppContainer>
        <Header onMenuToggle={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
        <div style={{ display: 'flex' }}>
          <Sidebar isOpen={isMobileMenuOpen} onOverlayClick={closeMobileMenu} />
          <MainContent />
        </div>
      </AppContainer>
    </ErrorBoundary>
  );
}

export default App;
