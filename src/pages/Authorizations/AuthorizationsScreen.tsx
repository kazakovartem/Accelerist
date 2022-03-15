import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrimeButton from '../../UI/PrimeButton';
import { operations, selectors } from '../../state/ducks/ducks';
import LoginInput from '../../UI/LoginInput';
import eyeImage from '../../assets/images/eye-password-show.svg';
import eyeOffImage from '../../assets/images/eye-password-hide.svg';
import checkImage from '../../assets/images/check-box-done.svg';
import { sizeScreen } from '../../types';

enum color {
  active = '#CAF0FF',
  deactivate = '#F8F8F8',
}

enum ScreenState {
  login,
  register,
}

enum InputState {
  normal = 'normal',
  error = 'error',
  disabled = 'disabled',
}

interface TabProps {
  backgroundColor: color;
}

type FormValues = {
  email: string;
  password: string;
};

const AuthorizationsScreen = () => {
  const styleButton = 'max-height: 46px;';
  const styleInput = 'max-height: 46px;';
  const dispatch = useDispatch();
  const nav = useNavigate();
  let location = ScreenState.login;
  if (useLocation().pathname === '/register') {
    location = ScreenState.register;
  }
  const options = {
    autoClose: 3000,
    position: toast.POSITION.TOP_LEFT,
    pauseOnHover: false,
  };
  const [stateScreen, setStateScreen] = useState(location);
  const [checkRememberPassword, setCheckRememberPassword] = useState(false);
  useEffect(() => {
    setStateScreen(location);
  }, [location]);
  const [hidePasswordState, setHidePasswordState] = useState(false);
  const user = useSelector(selectors.user.selectUser());
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: 'all' });

  const onSubmit = async (data: FormValues) => {
    if (stateScreen === ScreenState.register) {
      const response = await dispatch(
        operations.user.signUpUser({ email: data.email, password: data.password }),
      );
      console.log(response);
      if (operations.user.signUpUser.fulfilled.match(response)) {
        //  toast(user.error, options);
      }
      if (response.payload) {
        toast(response.payload, options);
      }
    } else {
      await dispatch(operations.user.signInUser({ email: data.email, password: data.password }));
      toast(user.error, options);
    }
  };

  const tabReg = () => {
    setStateScreen(ScreenState.login);
    reset({ email: '', password: '' });
    nav('/register');
  };

  const tabLogin = () => {
    setStateScreen(ScreenState.register);
    reset({ email: '', password: '' });
    nav('/login');
  };

  const hidePassword = () => {
    if (!hidePasswordState) {
      setHidePasswordState(true);
    } else {
      setHidePasswordState(false);
    }
  };

  const checkRemember = () => {
    if (!checkRememberPassword) {
      setCheckRememberPassword(true);
    } else {
      setCheckRememberPassword(false);
    }
  };

  return (
    <>
      <ToastContainer />

      <TestContain>
        <Welcome>Welcome to Accelerist</Welcome>
        <Tab>
          <TabBut
            onClick={tabReg}
            tabIndex={0}
            backgroundColor={stateScreen === ScreenState.login ? color.deactivate : color.active}
          >
            Register
          </TabBut>
          <TabBut
            onClick={tabLogin}
            tabIndex={0}
            backgroundColor={stateScreen === ScreenState.register ? color.deactivate : color.active}
          >
            Login
          </TabBut>
        </Tab>
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

          <FieldContain>
            <Label>Password</Label>
            <EyePassword src={hidePasswordState ? eyeImage : eyeOffImage} onClick={hidePassword} />
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
            {errors.password && <ErrorMessage>{errors?.password?.message || 'Error'}</ErrorMessage>}
          </FieldContain>
          {stateScreen === ScreenState.login && (
            <LoginRemember>
              <PasswordRemember onClick={checkRemember}>
                <PasswordCheck>
                  {checkRememberPassword && <CheckImage src={checkImage} />}
                </PasswordCheck>
                Remember
              </PasswordRemember>
              <ForgotPassword to="/reset">Forgot password?</ForgotPassword>
            </LoginRemember>
          )}
          {stateScreen === ScreenState.register && (
            <RegisterAgreement>
              I agree that by clicking
              {/*  eslint-disable-next-line react/jsx-one-expression-per-line */}
              <strong>“Registration”</strong> I accept the{' '}
              <RegisterPolicy to="/">Terms Of Service</RegisterPolicy>
              {/*  eslint-disable-next-line react/jsx-one-expression-per-line */}
              and <RegisterPolicy to="/">Privacy Policy</RegisterPolicy>
            </RegisterAgreement>
          )}
          <PrimeButton
            isLoading={user.status === 'Loading' && true}
            label={stateScreen === ScreenState.login ? "Login" : "Registration"}
            containerStyle={styleButton}
            useButton={() => handleSubmit(onSubmit)}
            disable={!isValid}
          />
        </Form>
      </TestContain>
    </>
  );
};

export default AuthorizationsScreen;

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
  text-align: center;
  color: #122434;
`;

const Tab = styled.div`
  background-color: #F8F8F8;
  min-width: 100%;
  margin-top: 25px;
  margin-bottom: 20px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

const TabBut = styled.a<TabProps>`
  width: 49%;
  height: 36px;
  color: #122434;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  justify-content: center;  
  align-items: center;
  font-family: 'Rubik-Regular';
  &:hover {
    background-color: #51C2EE;
    color: #122434;
  };
  &:focus {};
  &:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
  };
`;

const Label = styled.label`
  font-size: 12px;
  font-family: 'Rubik-Regular';
  color: #737373;
  text-align: left;
  margin-bottom: 5px;
  box-sizing: border-box;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

`;

const ErrorMessage = styled.p`
  font-size: 12px;
  position: absolute;
  font-family: 'Rubik-Regular';
  color: red;
  text-align: left;
  margin-bottom: 5px;
`;

const FieldContain = styled.div`
  position: relative;
  width: 100%;
  height: 65px;
  margin-bottom: 34px;
  box-sizing: border-box;
`;

const LoginRemember = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;  
  align-items: center;
`;

const PasswordRemember = styled.span`
  color: #222222;
  font-size: 12px;
  font-family: 'Rubik-Regular';
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PasswordCheck = styled.p`
  height: 20px;
  width: 20px;
  border: 1px solid rgb(191, 191, 191);
  border-radius: 3px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;  
  align-items: center;

`;

const ForgotPassword = styled(Link)`
  text-decoration: none;
  color: #737373;
  font-size: 12px;
  font-family: 'Rubik-Regular';
  cursor: pointer;
  &:hover {
    color: #122434;
  };
`;

const EyePassword = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  top: 54%;
  left: 89%;
  color: #737373;
  cursor: pointer;
`;

const CheckImage = styled.img`
  height: 18px;
  width: 18px;
`;

const RegisterAgreement = styled.span`
  width: 95%;
  height: 28px;
  margin-bottom: 20px;
  color: #222222;
  text-align: center;
  font-size: 12px;
  font-family: 'Rubik-Regular';
`;

const RegisterPolicy = styled(Link)`
  text-decoration: none;
  color: #737373;
  font-size: 12px;
  font-family: 'Rubik-Regular';
  cursor: pointer;
  &:hover {
    color: #122434;
  };
`;
