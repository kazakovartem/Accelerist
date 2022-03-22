import React from 'react';
import styled from 'styled-components';

interface PrimeButtonProps {
  placeholder: string;
  register: any;
  errorState: boolean;
  typeInput?: string;
}

interface PropsInput {
  maximumHeight: string;
  background: string;
  border: string;
}

const LoginInput: React.FC<PrimeButtonProps> = ({
  placeholder,
  register,
  errorState,
  typeInput,
}) => (
  <Input
    background={errorState ? 'rgb(255, 242, 242)' : '#FFF'}
    border={errorState ? '1px solid red' : '1px solid #E8E8E8'}
    type={typeInput}
    placeholder={placeholder}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...register}
  />
);

LoginInput.defaultProps = {
  typeInput: 'text',
};

export default React.memo(LoginInput);

const Input = styled.input<PropsInput>`
  background-color: ${(p) => p.background};
  width: 100%;
  border-radius: 6px;
  padding: 10px 16px;
  border: ${(p) => p.border};
  font-family: 'Rubik-Regular';
  font-size: 16px;
  box-sizing: border-box;
  line-height: 155%;
  color: #737373;
  &:hover {
    background-color: #FFF;
  };
  &:focus {
    border: 1px solid #E8E8E8;
  };
  &:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
  };
  &::placeholder {
    color: #737373;
  }
`;
