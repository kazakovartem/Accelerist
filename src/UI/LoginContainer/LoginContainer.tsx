import React from 'react';
import styled, { CSSProp } from 'styled-components';
import img from '../../assets/image/LoginImage.png';
import logo from '../../assets/image/LoginLogo.svg';

interface PrimeButtonProps {
  children: React.ReactNode;
}

enum typeButton {
  normal,
  hover,
}

const size = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1440px',
};

const LoginContainer: React.FC<PrimeButtonProps> = ({ children }) => {
  const rtt = 42;
  return (
    <Root>
      <Header>
        <Logo src={logo} alt="main logo" />
        <TextHeader>ACCELERIST</TextHeader>
      </Header>
      <Content>{children}</Content>
    </Root>
  );
};

export default React.memo(LoginContainer);

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${img}) center;
  background-size: cover;
`;

const Header = styled.header`
  height: 80px;
  width: 100%;
  background-color: #122434;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Logo = styled.img`
  height: 36px;
  width: 36px;
  margin-right: 16px;
`;

const TextHeader = styled.p`
  font-size: 18px;
  font-family: 'GothamRounded-Medium';
  letter-spacing: 4px;
`;

const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 73px 0 20px 0;
  @media (max-width: ${size.tablet}) {
    padding: 120px 15px 20px 15px;
  }
  @media (max-width: ${size.mobile}) {
    padding: 20px 16px 20px 16px;
  }
`;
