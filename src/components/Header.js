import styled from 'styled-components';
import { Menu, Close } from '@mui/icons-material';

const HeaderContainer = styled.header`
  background: #ffffff;
  color: #374151;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LogoText = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 800;
  color: #6B46C1;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const LogoTagline = styled.p`
  margin: 0;
  font-size: 0.6rem;
  color: #6B46C1;
  letter-spacing: 1px;
  margin-top: -2px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #374151;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(107, 70, 193, 0.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #374151;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s;
  font-weight: 500;

  &:hover {
    color: #6B46C1;
    background-color: rgba(107, 70, 193, 0.05);
  }
`;

const BookDemoButton = styled.button`
  background: #6B46C1;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: #553C9A;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = ({ onMenuToggle, isMobileMenuOpen }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoText>SCIQUS</LogoText>
        <LogoTagline>INNOVATION AT CORE</LogoTagline>
      </LogoContainer>
      
      <DesktopNav>
        <NavLink href="#ams">AMS</NavLink>
        <NavLink href="#products">Other Products</NavLink>
        <NavLink href="#solutions">Solutions</NavLink>
        <NavLink href="#about">About</NavLink>
      </DesktopNav>

      <BookDemoButton>Book A Demo</BookDemoButton>

      <HamburgerButton onClick={onMenuToggle}>
        {isMobileMenuOpen ? <Close /> : <Menu />}
      </HamburgerButton>
    </HeaderContainer>
  );
};

export default Header;
