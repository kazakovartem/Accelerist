import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTypedDispatch } from '../../state/store';
import Arrow from '../../assets/images/grey-arrow-for-link-dashboard.svg';
import { operations, selectors } from '../../state/ducks/ducks';
import routsConstant from '../../types/constant-routs';
import Prospects from '../../components/ProspectsContainer';
import FavoriteCompanyContainer from './components/FavoriteContainer';
import LastLoginContain from './components/LastLoginContain';
import { SortSavedList } from '../../types';

const DeckScreen = () => {
  const dispatch = useTypedDispatch();
  const user = useSelector(selectors.user.selectUser());
  const lastLog = useSelector(selectors.lastLogin.selectLastLogin());
  const team = useSelector(selectors.team.selectTeam());
  const nav = useNavigate();
  const numbers = [1, 2, 3];

  const handleGetTeam = async () => {
    const response = await dispatch(operations.team.getTeam({}));
    if (operations.team.getTeam.fulfilled.match(response)) {
      console.log(response, '1');
    } else if (response.payload) {
      console.log(response, '2');
    } else {
      console.log(response, '3');
    }
  };

  const handelGetLastLogin = async () => {
    const response = await dispatch(operations.lastLogin.getLastLogin({}));
    if (operations.lastLogin.getLastLogin.fulfilled.match(response)) {
      console.log(response, '1');
    } else if (response.payload) {
      console.log(response, '2');
    } else {
      console.log(response, '3');
    }
  };

  const handleGetSavedList = async () => {
    const response = await dispatch(
      operations.saved.getSaved({ page: 1, limit: 2, sort: SortSavedList.alphabet }),
    );
    if (operations.saved.getSaved.fulfilled.match(response)) {
      console.log(response, 'saved');
    } else if (response.payload) {
      console.log(response, '2');
    } else {
      console.log(response, '3');
    }
  };

  const handleGetFavoriteCompany = async () => {
    const response = await dispatch(
      operations.company.getFavoriteCompanies({ page: 1, limit: 6 }),
    );
    if (operations.company.getFavoriteCompanies.fulfilled.match(response)) {
      console.log(response, 'saved');
    } else if (response.payload) {
      console.log(response, '2');
    } else {
      console.log(response, '3');
    }
  };

  useEffect(() => {
    handleGetTeam();
    handelGetLastLogin();
    handleGetSavedList();
    handleGetFavoriteCompany();
  }, []);

  const handleNavigateToPage = () => {
    // nav('/');
    console.log(team);
  };

  return (
    <Root>
      <Head>
        <HeadContent>Dashboard</HeadContent>
      </Head>
      <ContentContain>
        <MainContent>
          <SessionSection>
            <SessionHead>
              <TitleSessionHead>Prospecting Sessions</TitleSessionHead>
              <LinkToProspects to={routsConstant.PROSPECTS}>see more</LinkToProspects>
            </SessionHead>
            <SessionBody>
              <Prospects viewFilter />
              <Prospects viewFilter={false} />
            </SessionBody>
          </SessionSection>
          <FooterContent>
            <Favorites>
              <FavoritesHead>
                <FavoritesHeadTitle>Favorites</FavoritesHeadTitle>
                <LinkToProspects to={routsConstant.COMPANY_FAVORITES}>see more</LinkToProspects>
              </FavoritesHead>
              <FavoritesContentContain>
                <FavoriteCompanyContainer label="Kinross" />
                <FavoriteCompanyContainer label="Expeditors International" />
                <FavoriteCompanyContainer label="qw" />
                <FavoriteCompanyContainer label="qw" />
                <FavoriteCompanyContainer label="qw" />
                <FavoriteCompanyContainer label="qw" />
              </FavoritesContentContain>
            </Favorites>
            <Reports>
              <ReportsHead>
                <ReportsTitle>Reports</ReportsTitle>
              </ReportsHead>
              <ReportsBody>
                <FirstReportsSection>
                  <SearchSession>
                    <SearchSessionHead>Search Sessions</SearchSessionHead>
                    <SearchSessionMain>
                      <SearchSessionMainLabel>Total</SearchSessionMainLabel>
                      <SearchSessionMainNumber>{team.searchCount}</SearchSessionMainNumber>
                    </SearchSessionMain>
                  </SearchSession>
                  <SentPitches>
                    <SentPitchesHead>Sent Pitches</SentPitchesHead>
                    <SentPitchesMain>
                      <SentPitchesLabel>Company</SentPitchesLabel>
                      <SentPitchesNumber>{team.pitchCount}</SentPitchesNumber>
                    </SentPitchesMain>
                  </SentPitches>
                </FirstReportsSection>
                <SecondReportsSection>
                  <ProspectStateHead>Prospect Navigator</ProspectStateHead>
                  <ProspectStateMain onClick={handleNavigateToPage}>
                    <ProspectStateMainLabel>Go to page</ProspectStateMainLabel>
                    <ProspectStateMainArrow src={Arrow} />
                  </ProspectStateMain>
                </SecondReportsSection>
                <ThirdReportsSection>
                  <LastLoginStateHead>Last Login</LastLoginStateHead>
                  {numbers.map((number) => (
                    <LastLoginContain label={`Test Test ${number}`} key={number} num={number} />
                  ))}
                </ThirdReportsSection>
              </ReportsBody>
            </Reports>
          </FooterContent>
        </MainContent>
      </ContentContain>
    </Root>
  );
};

export default DeckScreen;

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

const SessionSection = styled.section`
  width: 100%;
  max-width: 1096px;
  margin-bottom: 40px;
`;

const SessionHead = styled.header`
  width: 100%;
  font-family: 'Rubik-Medium';
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const TitleSessionHead = styled.h4`
  font-family: 'Rubik-Medium';
  font-size: 24px;
  line-height: 148%;
  margin: 0;
`;

const LinkToProspects = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-family: 'Rubik-Regular';
  color: #2BAEE0;
  &:hover {
    text-decoration: underline;
  };
`;

const SessionBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 12px;
`;

const FooterContent = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1096px;
`;

const Favorites = styled.section`
  box-sizing: border-box;
  max-width: 536px;
  width: 100%;
  margin-bottom: 40px;
`;

const FavoritesHead = styled.header`
  display: flex;
  justify-content: row;
  align-items: center;
  justify-content: space-between;  
  margin-bottom: 16px;
`;

const FavoritesHeadTitle = styled.h2`
  font-family: 'Rubik-Medium';
  font-size: 24px;
  line-height: 148%;
  margin: 0;
`;

const FavoritesContentContain = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  box-sizing: border-box;
  margin: -12px -12px 0px;
`;

const Reports = styled.section`
  text-align: start;
  box-sizing: border-box;
  max-width: 536px;
  width: 100%;
  margin-bottom: 40px;
  font-family: 'Rubik-Regular';
`;

const ReportsHead = styled.header`
  display: flex;
  justify-content: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

const ReportsTitle = styled.h2`
  font-family: 'Rubik-Medium';
  font-size: 24px;
  line-height: 148%;
  margin: 0;
`;

const ReportsBody = styled.div`
  width: 536px;
  min-height: 516px;
  background: rgb(255, 255, 255);
  border-radius: 6px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const FirstReportsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const SecondReportsSection = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

const ThirdReportsSection = styled.div`
  width: 100%;
`;

const SearchSession = styled.div`
  width: calc(50% - 9px);
`;

const SearchSessionHead = styled.h3`
  margin: 0;
  font-family: 'Rubik-Medium';
  font-size: 16px;
  line-height: 145%;
  margin-bottom: 16px;
`;

const SearchSessionMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(249, 249, 249);
  border-radius: 4px;
  padding: 5px 0px;
`;

const SearchSessionMainLabel = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  margin-bottom: 8px;
`;

const SearchSessionMainNumber = styled.p`
  font-size: 24px;
  line-height: 148%;
  font-family: 'Rubik-Medium';
`;

const SentPitches = styled.div`
  width: calc(50% - 9px);
`;

const SentPitchesHead = styled.h3`
  margin: 0;
  font-family: 'Rubik-Medium';
  font-size: 16px;
  line-height: 145%;
  margin-bottom: 16px;
`;

const SentPitchesMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(249, 249, 249);
  border-radius: 4px;
  padding: 5px 0px;
`;

const SentPitchesLabel = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  margin-bottom: 8px;
`;

const SentPitchesNumber = styled.p`
  font-size: 24px;
  line-height: 148%;
  font-family: 'Rubik-Medium';
`;

const ProspectStateHead = styled.h3`
  margin: 0;
  font-family: 'Rubik-Medium';
  line-height: 145%;
  margin-bottom: 16px;
`;

const ProspectStateMain = styled.div`
  height: 71px;
  width: 100%;
  background: rgb(249, 249, 249);
  font-size: 16px;
  font-family: 'Rubik-Regular';
  color: #122434;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  border-radius: 4px;
`;

const ProspectStateMainLabel = styled.p`
  line-height: 155%;
  font-size: 16px;
`;

const ProspectStateMainArrow = styled.img`
  margin-top: 3px;
  margin-right: 1px;
  width: 11px;
  height: 18px;
`;

const LastLoginStateHead = styled.h3`
  margin: 0;
  font-size: 16px;
  font-family: 'Rubik-Medium';
  line-height: 145%;
  margin-bottom: 16px;
`;
