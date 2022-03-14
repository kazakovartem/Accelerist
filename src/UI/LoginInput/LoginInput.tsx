import React from 'react';
import styled, { CSSProp } from 'styled-components';

interface PrimeButtonProps {
  containerStyle: CSSProp;
  placeholder: string;
  register: any;
  state: string;
  typeInput?: string;
}

const LoginInput: React.FC<PrimeButtonProps> = ({
  containerStyle = {},
  placeholder,
  register,
  state,
  typeInput,
}) => {
  let style: CSSProp = '';
  if (state === 'normal') {
    style = containerStyle;
  } else {
    // eslint-disable-next-line prefer-template
    style = containerStyle + 'background-color: rgb(255, 242, 242);border: 1px solid red;';
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Input $CSS={style} type={typeInput} placeholder={placeholder} {...register} />;
};

LoginInput.defaultProps = {
  typeInput: 'text',
};

export default React.memo(LoginInput);

const Input = styled.input<{ $CSS: CSSProp }>`
  background-color: #FFF;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  padding-left: 16px;
  box-sizing: border-box;
  border: 1px solid #E8E8E8;
  font-family: 'Rubik-Regular';
  Font size: 16px;
  color: #737373;
  Line height: 25px;
  Line height: 155%;
  ${({ $CSS }) => $CSS};
  &:hover {
    background-color: #FFF;
  };
  &:focus {
    border: 1px solid #E8E8E8;
  };
  &:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
  };
`;
