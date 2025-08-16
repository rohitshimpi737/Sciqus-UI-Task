import React from 'react';
import styled from 'styled-components';
import { Home, Info, Build, ContactMail, Dashboard } from '@mui/icons-material';

const SidebarContainer = styled.aside`
  position: fixed;
  top: 70px;
  left: 0;
  width: 250px;
  height: calc(100vh - 70px);
  background: white;
  color: #374151;
  padding: 2rem 0;
  transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  border-right: 1px solid #E5E7EB;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    box-shadow: ${props => props.isOpen ? '2px 0 10px rgba(0, 0, 0, 0.3)' : 'none'};
  }
`;

const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: ${props => props.isOpen ? 'block' : 'none'};

  @media (min-width: 769px) {
    display: none;
  }
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #374151;
  text-decoration: none;
  padding: 1rem 2rem;
  transition: all 0.3s;
  border-radius: 0;
  margin: 0 1rem;
  border-radius: 8px;

  &:hover {
    background: linear-gradient(135deg, #6B46C1 0%, #EC4899 100%);
    color: white;
    transform: translateX(4px);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const SidebarTitle = styled.h2`
  padding: 0 2rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #6B46C1;
  border-bottom: 1px solid #E5E7EB;
  padding-bottom: 1rem;
  font-weight: 700;
`;

const Sidebar = ({ isOpen, onOverlayClick }) => {
  return (
    <>
      <SidebarOverlay isOpen={isOpen} onClick={onOverlayClick} />
      <SidebarContainer isOpen={isOpen}>
        <SidebarTitle>SCIQUS NAVIGATION</SidebarTitle>
        <SidebarNav>
          <SidebarLink href="#ams">
            <Home />
            <span>AMS Dashboard</span>
          </SidebarLink>
          <SidebarLink href="#analytics">
            <Dashboard />
            <span>Analytics</span>
          </SidebarLink>
          <SidebarLink href="#solutions">
            <Build />
            <span>AI Solutions</span>
          </SidebarLink>
          <SidebarLink href="#about">
            <Info />
            <span>About Sciqus</span>
          </SidebarLink>
          <SidebarLink href="#contact">
            <ContactMail />
            <span>Contact Support</span>
          </SidebarLink>
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
