import React from 'react';
import styled from 'styled-components';

interface PrimeButtonProps {
  label: string;
}

const PrimeButton: React.FC<PrimeButtonProps> = ({ label }) => {
  const root = label;
  return (
    <Root>
      <Title>{root}</Title>
    </Root>
  );
};

export default React.memo(PrimeButton);

const Root = styled.button`
  background-color: #2a71aa;
  width: 350px;
  height: 60px;
  text-align: center;
  border-radius: 18px;
`;

const Title = styled.p`
  font-size: 22px;
  text-align: center;
  color: #20cf5b;
`;
