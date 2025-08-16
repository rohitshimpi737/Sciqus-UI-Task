// Breakpoints for responsive design
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  largeDesktop: '1200px'
};

// Media query helpers
export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.tablet})`,
  largeDesktop: `@media (min-width: ${breakpoints.largeDesktop})`
};

// Common styled-components mixins
export const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const cardShadow = `
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

// Color scheme
export const colors = {
  primary: '#667eea',
  primaryDark: '#764ba2',
  secondary: '#4ECDC4',
  accent: '#FF6B6B',
  dark: '#2c3e50',
  darkSecondary: '#34495e',
  light: '#ecf0f1',
  background: '#f8f9fa',
  white: '#ffffff',
  text: '#333333',
  textLight: '#555555'
};

// Typography
export const typography = {
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  fontSize: {
    small: '0.875rem',
    base: '1rem',
    large: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem'
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }
};
