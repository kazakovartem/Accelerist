import React from 'react';
import styled, { keyframes } from 'styled-components';

interface PrimeButtonProps {
  label: string;
  useButton(): void;
  isLoading?: boolean;
  disable?: boolean;
  height?: boolean;
}

interface PropsBtn {
  cursor: string;
  background: string;
  inputColor: string;
  heightBtn: string;
}

const PrimeButton: React.FC<PrimeButtonProps> = ({
  label,
  useButton,
  isLoading,
  disable,
  height,
}) => {
  const disableCursor = disable ? 'no-drop' : 'pointer';
  const heightButton = height ? '36px' : '46px';
  return (
    <Root
      onClick={useButton}
      cursor={isLoading ? 'wait' : disableCursor}
      background={disable ? '#CEEDF9' : '#2baee0'}
      disabled={disable || isLoading}
      inputColor={disable ? 'rgba(43, 174, 224, 0.3)' : '#FFF'}
      heightBtn={heightButton}
    >
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      {!isLoading && <>{label}</>}
      {isLoading && <Spinner />}
    </Root>
  );
};

PrimeButton.defaultProps = {
  isLoading: false,
  disable: false,
  height: false,
};

export default React.memo(PrimeButton);

const Root = styled.button<PropsBtn>`
  background-color: ${(p) => p.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  cursor: ${(p) => p.cursor};
  border: 0;
  font-family: 'Rubik-Medium';
  height: ${(p) => (p.heightBtn)};
  font-weight: 500;
  font-size: ${(p) => (p.heightBtn === '46px' ? '16px' : '14px')};
  font-weight: 500;
  text-align: center;
  color: #fff;
  color: ${(p) => p.inputColor || '#fff'};
  &:hover {
    background-color:${(p) => (p.background === '#CEEDF9' ? '#CEEDF9' : '#51C2EE')};
  };
  &:focus {
    background-color: #1DA7DC;
  };
  &:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
  };
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.p`
  border: 3px solid rgba(212, 201, 236, 0.4);
  border-top: 3px solid #FFFFFF;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 1s linear infinite;
`;
