import React from 'react';
import styled, { CSSProp } from 'styled-components';
import logo from '../../assets/images/logo-main-screen.svg';

interface HeaderContentProps {
  label: string;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ label }) => {
  const rtt = 42;
  return (
    <Header>
      <Logo src={logo} alt="main logo" />
      <TextHeader>{label}</TextHeader>
    </Header>
  );
};

export default React.memo(HeaderContent);

const Header = styled.header`
  height: 80px;
  width: 100%;
  background-color: #D4F3FF;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
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
  color: #122434;
`;
