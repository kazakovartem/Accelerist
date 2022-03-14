import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectors, operations } from '../../state/ducks/ducks';
import PrimeButton from '../../UI/PrimeButton';
import LoginContainer from '../../UI/LoginContainer';
import LoginInput from '../../UI/LoginInput';
import { sizeScreen } from '../../types';

enum InputState {
  normal = 'normal',
  error = 'error',
  disabled = 'disabled',
}

type FormValues = {
  email: string;
};

const ResetPasswordScreen: React.FC<any> = () => {
  const styleButton = 'max-height: 46px;';
  const styleInput = 'max-height: 46px;';
  const dispatch = useDispatch();
  const options = {
    autoClose: 3000,
    position: toast.POSITION.TOP_LEFT,
    pauseOnHover: false,
  };
  const user = useSelector(selectors.user.selectUser());
  // const nav = useNavigate();
  const onSubmit = (data: FormValues) => {
    // nav('/');
    dispatch(operations.user.sendMail({ email: data.email }));
    toast(user.error, options);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: 'onBlur' });

  return (
    <>
      <ToastContainer />
      <LoginContainer>
        <Root>
          <TestContain>
            <Welcome>Password Reset</Welcome>
            <Text>Enter your email to receive instructions on how to reset your password.</Text>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FieldContain>
                <Label>Email</Label>
                <LoginInput
                  containerStyle={styleInput}
                  placeholder="Enter email"
                  register={register('email', {
                    required: 'This field is required',
                    minLength: {
                      value: 3,
                      message: 'to very small',
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email address',
                    },
                  })}
                  state={errors.email ? InputState.error : InputState.normal}
                />
                {errors.email && <ErrorMessage>{errors?.email?.message || 'Error'}</ErrorMessage>}
              </FieldContain>
              <PrimeButton
                isLoading={user.status === 'Loading' && true}
                label="Reset"
                containerStyle={styleButton}
                useButton={() => handleSubmit(onSubmit)}
                disable={!isValid}
              />
            </Form>
          </TestContain>
          <BackToLogin to="/">Return to Login</BackToLogin>
        </Root>
      </LoginContainer>
    </>
  );
};

export default ResetPasswordScreen;

const Root = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 76vh;
`;

const TestContain = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 454px;
  padding: 40px;
  border-radius: 6px;
  box-sizing: border-box;
  @media (max-width: ${sizeScreen.tablet}) {
    background-color: #FFFFFF;
  }
  @media (max-width: ${sizeScreen.mobile}) {
    background-color: #FFFFFF;
    padding: 24px 16px;
  }
`;

const Welcome = styled.h1`
  width: 100%;
  font-weight: 500;
  font-family: 'Rubik-Medium';
  font-size: 24px;
  color: #122434;
  margin-bottom: 20px;
`;

const Text = styled.p`
  width: 100%;
  font-family: 'Rubik-Regular';
  line-height: 155%;
  font-size: 16px;
  color: #122434;
  margin-bottom: 30px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

`;

const ErrorMessage = styled.span`
  font-size: 12px;
  font-family: 'Rubik-Regular';
  color: red;
  text-align: left;
  margin-bottom: 5px;
`;

const Label = styled.label`
  font-size: 12px;
  font-family: 'Rubik-Regular';
  color: #737373;
  text-align: left;
  margin-bottom: 5px;
`;

const FieldContain = styled.div`
  position: relative;
  width: 100%;
  height: 95px;
  margin-bottom: 26px
`;

const BackToLogin = styled(Link)`
  text-decoration: none;
  font-family: 'Rubik-Regular';
  line-height: 150%;
  width: 138px;
  height: 36px;
  background: rgba(18, 36, 52, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  font-size: 12px;
  border-radius: 6px;
  &:hover {
    background: rgba(18, 36, 52, 0.25);
  };
`;
