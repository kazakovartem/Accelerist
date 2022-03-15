import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { operations, selectors } from '../../state/ducks/ducks';
// import { useNavigate } from 'react-router-dom';
import PrimeButton from '../../UI/PrimeButton';

const size = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1440px',
};

const DeckScreen = () => {
  const user = useSelector(selectors.user.selectUser());
  const styleButton = 'max-height: 46px;';
  // const nav = useNavigate();
  const onSubmit = () => {
    console.log(user);
    // nav('/');
  };
  // <PrimeButton label="go to" containerStyle={style} useButton={() => onSubmit()} />
  return (
    <Root>
      <TestContain>
        Desk
        <PrimeButton label="Login" containerStyle={styleButton} useButton={onSubmit} />
      </TestContain>
    </Root>
  );
};

export default DeckScreen;

const TestContain = styled.div`
  background-color: #FFF;
  width: 600px;
  height: 800px;
  font-size: 1.5em;
  text-align: center;
  color: #29b668;
  @media (max-width: ${size.tablet}) {
    background-color: #2b4ae0;
  }
`;

const Root = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
