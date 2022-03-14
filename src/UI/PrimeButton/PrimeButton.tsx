import React from 'react';
import styled, { CSSProp, keyframes } from 'styled-components';

interface PrimeButtonProps {
  label: string;
  containerStyle: CSSProp;
  useButton(): void;
  isLoading?: boolean;
  disable?: boolean;
}

enum typeButton {
  normal,
  hover,
}

const PrimeButton: React.FC<PrimeButtonProps> = ({
  label,
  containerStyle = {},
  useButton,
  isLoading,
  disable,
}) => {
  // const theme = useTheme();
  // console.log('Current theme: ', theme);
  let style: CSSProp = containerStyle;
  if (isLoading) {
    // eslint-disable-next-line prefer-template
    style = containerStyle + 'cursor: wait;background-color: #CEEDF9;';
  }
  if (disable) {
    // eslint-disable-next-line prefer-template
    style = containerStyle + 'cursor: no-drop;background-color: #CEEDF9;pointer-events: none;';
  }

  return (
    <Root $CSS={style} onClick={useButton} disabled={disable}>
      {!isLoading && <Title>{label}</Title>}
      {isLoading && <Spinner />}
    </Root>
  );
};

PrimeButton.defaultProps = {
  isLoading: false,
  disable: false,
};

export default React.memo(PrimeButton);

const Root = styled.button<{ $CSS: CSSProp }>`
  background-color: #2baee0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  font-family: 'Rubik-Regular';
  ${({ $CSS }) => $CSS};
  &:hover {
    background-color: #51C2EE;
  };
  &:focus {
    background-color: #1DA7DC;
  };
  &:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
  };
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #fff;
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
