import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Arrow from '../../assets/images/grey-arrow-for-link-dashboard.svg';
import { operations, selectors } from '../../state/ducks/ducks';
import routsConstant from '../../types/constant-routs';
import BlackArrow from '../../assets/images/black-arrow.svg';
import Company from '../../components/CompanyContain';

const SearchScreen = () => {
  const user = useSelector(selectors.user.selectUser());
  const nav = useNavigate();
  const numbers = [1, 2, 3];
  const isLastScreen = true;
  const isFirstScreen = true;
  const handleNavigateToPage = () => {
    nav('/');
  };

  return (
    <Root>
      <Head>
        <HeadContent>Search</HeadContent>
      </Head>
      <ContentContain>
        <MainContent>
          <FavoritesSection>
            <FavoritesHead>
              <FavoritesHeadTitle>
                12 companies
              </FavoritesHeadTitle>
              <FavoritesScreenSwitch>
                {isFirstScreen && (
                  <BackButton>
                    <BackArrow src={BlackArrow} />
                  </BackButton>
                )}
                <CountOfScreen>1-12 of 12</CountOfScreen>
                {isLastScreen && (
                  <ForwardButton>
                    <ForwardArrow src={BlackArrow} />
                  </ForwardButton>
                )}
              </FavoritesScreenSwitch>
            </FavoritesHead>
            <FavoritesMain>
              <Company />
              <Company />
              <Company />
              <Company />
              <Company />
              <Company />
            </FavoritesMain>
          </FavoritesSection>
        </MainContent>
      </ContentContain>
    </Root>
  );
};

export default SearchScreen;

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

const FavoritesSection = styled.section`
  width: 100%;
  max-width: 1096px;
  margin-bottom: 40px;
`;

const FavoritesHead = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 23px;
  max-width: 1096px;
`;

const FavoritesHeadTitle = styled.h2`
  margin: 0;
  font-family: 'Rubik-Medium';
  font-size: 16px;
  line-height: 145%;
  color: #122434;
`;

const FavoritesScreenSwitch = styled.div`
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

const FavoritesMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: -12px -12px 0px;
`;
