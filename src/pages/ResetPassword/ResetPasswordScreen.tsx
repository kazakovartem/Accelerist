import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useTypedDispatch } from '../../state/store';
import 'react-toastify/dist/ReactToastify.css';
import { selectors, operations } from '../../state/ducks/ducks';
import PrimeButton from '../../UI/PrimeButton';
import LoginInput from '../../UI/LoginInput';
import { sizeScreen } from '../../types';
import routsConstant from '../../types/constant-routs';

type FormValues = {
  email: string;
};

const options = {
  autoClose: 3000,
  position: toast.POSITION.TOP_LEFT,
  pauseOnHover: false,
};

const ResetPasswordScreen = () => {
  const dispatch = useTypedDispatch();
  const nav = useNavigate();
  const user = useSelector(selectors.user.selectUser());

  const onSubmit = async (data: FormValues) => {
    const response = await dispatch(
      operations.user.sendMail({ email: data.email }),
    );
    if (operations.user.sendMail.fulfilled.match(response)) {
      // success to send mail
      nav(routsConstant.SIGN_IN, { replace: true });
    } else if (response.payload) {
      toast(response.payload, options);
    } else {
      toast(response.error.message, options);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: 'onChange' });

  return (
    <>
      <ToastContainer />
      <Root>

        <TestContain>
          <Welcome>Password Reset</Welcome>
          <Text>Enter your email to receive instructions on how to reset your password.</Text>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <FieldContain>
              <Label>Email</Label>
              <LoginInput
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
                errorState={typeof errors.email !== 'undefined'}
              />
              {errors.email && <ErrorMessage>{errors?.email?.message || 'Error'}</ErrorMessage>}
            </FieldContain>

            <PrimeButton
              isLoading={user.status === 'Loading' && true}
              label="Reset"
              useButton={() => handleSubmit(onSubmit)}
              disable={!isValid}
            />

          </Form>
        </TestContain>

        <BackToLogin to="/">Return to Login</BackToLogin>
      </Root>
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
  line-height: 148%;
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

const ErrorMessage = styled.p`
  font-size: 12px;
  font-family: 'Rubik-Regular';
  color: red;
  text-align: left;
  position: absolute;
  margin-bottom: 5px;
`;

const Label = styled.label`
  font-size: 12px;
  font-family: 'Rubik-Regular';
  color: #737373;
  line-height: 150%;
  text-align: left;
  margin-bottom: 4px;
`;

const FieldContain = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 40px
`;

const BackToLogin = styled(Link)`
  text-decoration: none;
  font-family: 'Rubik-Medium';
  line-height: 150%;
  width: 138px;
  height: 36px;
  font-weight: 500;
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
