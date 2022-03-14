import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectors, operations } from '../../state/ducks/ducks';
import PrimeButton from '../../UI/PrimeButton';
import LoginContainer from '../../UI/LoginContainer';
import LoginInput from '../../UI/LoginInput';
import eyeImage from '../../assets/image/eye.svg';
import eyeOffImage from '../../assets/image/eyeOff.svg';
import { sizeScreen } from '../../types';

enum InputState {
  normal = 'normal',
  error = 'error',
  disabled = 'disabled',
}

type FormValues = {
  passwordConfirm: string;
  password: string;
};

const ChangePasswordScreen: React.FC<any> = () => {
  const styleButton = 'max-height: 46px;';
  const styleInput = 'max-height: 46px;';
  const dispatch = useDispatch();
  const user = useSelector(selectors.user.selectUser());
  const [hidePasswordState, setHidePasswordState] = useState(false);
  const [hidePasswordConfirmationState, setHidePasswordConfirmationState] = useState(false);
  const token = useLocation().search.slice(20);
  const options = {
    autoClose: 3000,
    position: toast.POSITION.TOP_LEFT,
    pauseOnHover: false,
  };
  // const nav = useNavigate();
  const onSubmit = (data: FormValues) => {
    // nav('/');
    dispatch(
      operations.user.changePassword({
        passwordConfirm: data.passwordConfirm,
        password: data.password,
      }),
    );
    toast(user.error, options);
  };
  useEffect(() => {
    dispatch(
      operations.user.addToken({
        token,
      }),
    );
  }, [dispatch, token]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: 'all' });

  const hidePassword = () => {
    if (!hidePasswordState) {
      setHidePasswordState(true);
    } else {
      setHidePasswordState(false);
    }
  };

  const hidePasswordConfirmation = () => {
    if (!hidePasswordConfirmationState) {
      setHidePasswordConfirmationState(true);
    } else {
      setHidePasswordConfirmationState(false);
    }
  };

  return (
    <LoginContainer>
      <Root>
        <TestContain>
          <Welcome>New Password</Welcome>
          <Text>Come up with a new password</Text>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FieldContain>
              <Label>Password</Label>
              <EyePassword
                src={hidePasswordState ? eyeImage : eyeOffImage}
                onClick={hidePassword}
              />
              <LoginInput
                containerStyle={styleInput}
                placeholder="Enter password"
                typeInput={hidePasswordState ? 'text' : 'password'}
                register={register('password', {
                  required: 'This field is required',
                  minLength: {
                    value: 3,
                    message: 'to very small',
                  },
                })}
                state={errors.password ? InputState.error : InputState.normal}
              />
              {errors.password && (
                <ErrorMessage>{errors?.password?.message || 'Error'}</ErrorMessage>
              )}
            </FieldContain>
            <FieldContain>
              <Label>Password Confirmation</Label>
              <EyePassword
                src={hidePasswordConfirmationState ? eyeImage : eyeOffImage}
                onClick={hidePasswordConfirmation}
              />
              <LoginInput
                containerStyle={styleInput}
                placeholder="Enter password"
                typeInput={hidePasswordConfirmationState ? 'text' : 'password'}
                register={register('passwordConfirm', {
                  required: 'This field is required',
                  minLength: {
                    value: 3,
                    message: 'to very small',
                  },
                  validate: (value) =>
                    value === getValues('password') || 'The passwords do not match',
                })}
                state={errors.passwordConfirm ? InputState.error : InputState.normal}
              />
              {errors.passwordConfirm && (
                <ErrorMessage>{errors?.passwordConfirm?.message || 'Error'}</ErrorMessage>
              )}
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
  );
};

export default ChangePasswordScreen;

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

const EyePassword = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  top: 35%;
  left: 89%;
  cursor: pointer;
`;
