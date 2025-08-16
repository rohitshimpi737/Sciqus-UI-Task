import React from 'react';
import styled from 'styled-components';
import ImageCarousel from './ImageCarousel';
import InteractiveSlider from './InteractiveSlider';
import GestureDemo from './GestureDemo';

const MainContainer = styled.main`
  margin-left: 250px;
  margin-top: 70px;
  padding: 2rem;
  min-height: calc(100vh - 70px);
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

const ContainersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Container = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(107, 70, 193, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(107, 70, 193, 0.1);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #6B46C1 0%, #EC4899 100%);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(107, 70, 193, 0.15);
    border-color: rgba(107, 70, 193, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ContainerTitle = styled.h2`
  margin: 0 0 1.5rem 0;
  background: linear-gradient(135deg, #6B46C1 0%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const TextBlock = styled.div`
  line-height: 1.6;
  color: #374151;
  font-size: 1rem;

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StaticContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    background: linear-gradient(135deg, #6B46C1 0%, #EC4899 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    img {
      height: 150px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  flex: 1;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  min-height: 50px;

  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, #6B46C1 0%, #EC4899 100%);
    color: white;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(107, 70, 193, 0.4);
    }
  ` : `
    background: transparent;
    color: #6B46C1;
    border: 2px solid #6B46C1;
    &:hover {
      background: #6B46C1;
      color: white;
      transform: translateY(-2px);
    }
  `}

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const handleButtonClick = (buttonName) => {
  alert(`${buttonName} clicked! This is where you'd implement the actual functionality.`);
};

const MainContent = () => {
  return (
    <MainContainer>
      <ContainersGrid>
        {/* Container 1: AI-Powered Solutions */}
        <Container>
          <ContainerTitle>AI-Powered Account Management Solutions</ContainerTitle>
          <ImageCarousel />
        </Container>

        {/* Container 2: Customer Retention Analytics */}
        <Container>
          <ContainerTitle>Customer Retention & Analytics</ContainerTitle>
          <TextBlock>
            <p>
              Sciqus leverages advanced AI algorithms to analyze customer behavior patterns and predict 
              churn risks with 95% accuracy. Our platform transforms raw data into actionable insights 
              that drive customer retention strategies.
            </p>
            <p>
              With real-time analytics dashboards, account managers can proactively identify at-risk 
              customers and implement personalized retention campaigns. Our machine learning models 
              continuously improve prediction accuracy based on historical outcomes.
            </p>
            <p>
              Experience up to 40% improvement in customer lifetime value through intelligent 
              account management powered by Sciqus innovation at its core.
            </p>
          </TextBlock>
        </Container>

        {/* Container 3: Growth Rate Tracker */}
        <Container>
          <ContainerTitle>Revenue Growth Rate Tracking</ContainerTitle>
          <InteractiveSlider />
        </Container>

        {/* Container 4: Integration Capabilities */}
        <Container>
          <ContainerTitle>Seamless Platform Integration</ContainerTitle>
          <StaticContent>
            <div style={{
              width: '100%',
              height: '200px',
              background: 'linear-gradient(135deg, #6B46C1 0%, #EC4899 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              Enterprise Integration Hub
            </div>
            <TextBlock>
              <p>
                Connect Sciqus seamlessly with your existing CRM, ERP, and business intelligence 
                platforms. Our robust API ecosystem supports 200+ integrations including Salesforce, 
                HubSpot, Microsoft Dynamics, and custom enterprise solutions.
              </p>
            </TextBlock>
          </StaticContent>
        </Container>

        {/* Container 5: Account Management Portal */}
        <Container>
          <ContainerTitle>Smart Account Management Portal</ContainerTitle>
          <ButtonContainer>
            <Button 
              variant="primary"
              onClick={() => handleButtonClick('Launch AMS Dashboard')}
            >
              Launch AMS Dashboard
            </Button>
            <Button 
              variant="secondary"
              onClick={() => handleButtonClick('View Analytics')}
            >
              View Analytics
            </Button>
          </ButtonContainer>
          <TextBlock style={{ marginTop: '1rem' }}>
            <p>
              Access comprehensive account management tools designed for modern businesses. 
              Monitor customer health scores, track engagement metrics, and automate retention 
              workflows all from one unified dashboard powered by Sciqus AI.
            </p>
          </TextBlock>
        </Container>

        {/* Container 6: Smart Gesture Controls */}
        <Container>
          <ContainerTitle>AI-Enhanced User Experience</ContainerTitle>
          <GestureDemo />
          <TextBlock style={{ marginTop: '1rem' }}>
            <p>
              Experience next-generation interface controls with AI-powered gesture recognition. 
              Our smart UI adapts to user behavior patterns, providing intuitive navigation 
              that increases productivity by 60% across desktop and mobile platforms.
            </p>
          </TextBlock>
        </Container>
      </ContainersGrid>
    </MainContainer>
  );
};

export default MainContent;
