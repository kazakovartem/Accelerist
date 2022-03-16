import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../assets/images/background-login-screen.png';
import logo from '../../assets/images/logo-login-screen.svg';
import { sizeScreen } from '../../types';

const LoginContainer = () => (
  <Root>
    <Header>
      <Logo src={logo} alt="main logo" />
      <TextHeader>ACCELERIST</TextHeader>
    </Header>
    <Content>
      <Outlet />
    </Content>
  </Root>
);

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
  @media (max-width: ${sizeScreen.tablet}) {
    padding: 120px 15px 20px 15px;
  }
  @media (max-width: ${sizeScreen.mobile}) {
    padding: 20px 16px 20px 16px;
  }
`;
