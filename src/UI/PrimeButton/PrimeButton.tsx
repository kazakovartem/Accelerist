import React from 'react';
import styled, { CSSProp, useTheme } from 'styled-components';

interface PrimeButtonProps {
  label: string;
  containerStyle: CSSProp;
}

enum typeButton {
  normal,
  hover,
}

const PrimeButton: React.FC<PrimeButtonProps> = ({ label, containerStyle = {} }) => {
  const root = label;
  const theme = useTheme();
  console.log('Current theme: ', theme);
  return (
    <Root $CSS={containerStyle}>
      <Title>{root}</Title>
    </Root>
  );
};

export default React.memo(PrimeButton);

const Root = styled.button<{ $CSS: CSSProp }>`
  background-color: #2baee0;
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  border-radius: 6px;
  border: 0;
  ${({ $CSS }) => $CSS};
  &:hover {
    background-color: #51C2EE;
  }
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #fff;
`;
