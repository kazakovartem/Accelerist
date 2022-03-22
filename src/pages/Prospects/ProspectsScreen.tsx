import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { operations, selectors } from '../../state/ducks/ducks';
import routsConstant from '../../types/constant-routs';
import BlackArrow from '../../assets/images/black-arrow.svg';
import Prospect from '../../components/ProspectsContainer';

const ProspectsScreen = () => {
  const user = useSelector(selectors.user.selectUser());
  const isLastScreen = true;
  const isFirstScreen = true;
  // const nav = useNavigate();
  const onSubmit = () => {
    console.log(user);
    // nav('/');
  };

  return (
    <Root>
      <Head>
        <HeadContent>Prospects</HeadContent>
      </Head>
      <ContentContain>
        <MainContent>
          <ProspectsSection>
            <ProspectsHead>
              <ProspectsFilters>
                <FiltersTitle>Sort by</FiltersTitle>
                <FiltersContain>
                  <OneFilter>Alphabet</OneFilter>
                  <OneFilter>Prospects Available</OneFilter>
                  <OneFilter>Last Activity</OneFilter>
                </FiltersContain>
              </ProspectsFilters>
              <ProspectsScreenSwitch>
                {isFirstScreen && <BackButton><BackArrow src={BlackArrow} /></BackButton>}
                <CountOfScreen>13-24 of 117</CountOfScreen>
                {isLastScreen && <ForwardButton><ForwardArrow src={BlackArrow} /></ForwardButton>}
              </ProspectsScreenSwitch>
            </ProspectsHead>
            <ProspectsMain>
              <MarginContain><Prospect viewFilter /></MarginContain>
              <MarginContain><Prospect viewFilter /></MarginContain>
              <MarginContain><Prospect viewFilter /></MarginContain>
              <MarginContain><Prospect viewFilter /></MarginContain>
              <MarginContain><Prospect viewFilter /></MarginContain>
              <MarginContain><Prospect viewFilter /></MarginContain>
            </ProspectsMain>
          </ProspectsSection>
        </MainContent>
      </ContentContain>
    </Root>
  );
};

export default ProspectsScreen;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-width: 1200px;
  box-sizing: border-box;
`;

const Head = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1320px;
  padding: 0px 20px;
  margin: 0px auto;
  height: 96px;
  background-color: #FFFFFF;
  box-sizing: border-box;
`;

const HeadContent = styled.h1`
  font-size: 32px;
  line-height: 150%;
  font-family: 'Rubik-Medium';
`;

const ContentContain = styled.section`
  min-height: calc(100% - 176px);
  width: 100%;
  text-align: center;
  background-color: #F9F9F9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0px auto;
  padding: 32px 20px 20px;
`;

const ProspectsSection = styled.section`
  width: 100%;
  max-width: 1096px;
`;

const ProspectsHead = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 23px;
  max-width: 1096px;
`;

const ProspectsFilters = styled.div`
  display: flex;
`;

const FiltersTitle = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  margin-right: 26px;
`;

const FiltersContain = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`;

const OneFilter = styled.li`
  font-size: 12px;
  line-height: 150%;
  margin-right: 22px;
  cursor: pointer;
  &:nth-child(3){
    margin-right: 0px;
  }
  &:hover{
    &::after{
      content: "";
      height: 2px;
      background: #2BAEE0;
      display: block;
      margin-top: 2px;
    }
  }
`;

const ProspectsScreenSwitch = styled.div`
  display: flex;
  align-items: center;
`;

const BackButton = styled.button`
  margin: 0 18px 0 0;
  border: 0;
  background-color: #F9F9F9;
  cursor: pointer;
  padding: 0;
  background: 0px center;
`;

const BackArrow = styled.img`
  transform: rotate(180deg);
  width: 11px;
  height: 18;
`;

const ForwardButton = styled.button`
  margin-left: 18px;
  border: 0;
  background-color: #F9F9F9;
  cursor: pointer;
  padding: 0;
  background: 0px center;
`;

const ForwardArrow = styled.img``;

const CountOfScreen = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  cursor: default;
`;

const ProspectsMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: -12px -12px 0px;
`;

const MarginContain = styled.div`
  margin: 12px;
`;
