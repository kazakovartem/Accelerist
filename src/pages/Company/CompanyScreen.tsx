import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Arrow from '../../assets/images/black-arrow.svg';
import PlantIkon from '../../assets/images/earth-icon.svg';
import MapPinIcon from '../../assets/images/map-pin-icon.svg';
import PhoneIcon from '../../assets/images/phone-icon.svg';
import { operations, selectors } from '../../state/ducks/ducks';
import routsConstant from '../../types/constant-routs';
import CompanyImg from '../../assets/images/void-company-label.svg';
import FavoriteCompany from '../../assets/images/like-active.svg';
import NotFavoriteCompany from '../../assets/images/like-de-active.svg';
import ButtonPrime from '../../UI/PrimeButton';

const CompanyScreen = () => {
  const user = useSelector(selectors.user.selectUser());
  const nav = useNavigate();
  const isFavorite = true;
  const text = 'Founded in 1993, Kinross is a Canadian-based senior gold mining company with mines and projects in the United States, Brazil, Russia, Mauritania, Chile, and Ghana. Their focus is on delivering value based on the core principles of operational excellence, bal...';
  const handleNavigateToBack = () => {
    nav('/');
  };

  const handleSubmit = () => {
    console.log('g');
  };

  return (
    <Root>
      <Head>
        <HeadContent onClick={handleNavigateToBack}>
          <HeadContentBack>
            <BackArrowImage />
          </HeadContentBack>
          <HeadContentText>Corporate Profile</HeadContentText>
        </HeadContent>
      </Head>
      <ContentContain>
        <MainContent>
          <CompanyHead>
            <CompanyHeadContent>
              <CompanyHeadIcon>
                <img src={CompanyImg} alt="2" />
              </CompanyHeadIcon>
              <CompanyHeadTextInfoContain>
                <CompanyHeadTextInfo>
                  <CompanyHeadName>Kinross</CompanyHeadName>
                  <CompanyHeadFavoriteButton>
                    <FavoriteCompanyImageContain src={NotFavoriteCompany} alt="e" />
                    {isFavorite && <FavoriteCompanyImage src={FavoriteCompany} alt="e" />}
                  </CompanyHeadFavoriteButton>
                </CompanyHeadTextInfo>
                <CompanyHeadTextFiledOfActivity>No information</CompanyHeadTextFiledOfActivity>
              </CompanyHeadTextInfoContain>
            </CompanyHeadContent>
          </CompanyHead>
          <CompanyBody>
            <CompanyBodyMainContent>
              <CompanyBodyMainHeader>Business Description Products</CompanyBodyMainHeader>
              <CompanyBodyMainHeaderDescription>Description</CompanyBodyMainHeaderDescription>
              <CompanyBodyMainDescription>{text}</CompanyBodyMainDescription>
              <CompanyBodyMainReportedHeader>Reported</CompanyBodyMainReportedHeader>
              <CompanyBodyMainReportedContent>
                <ReportedContentRevenue>
                  <ReportedContentHead>Revenue Reported</ReportedContentHead>
                  <ReportedContentNumber>$ 3,500,000</ReportedContentNumber>
                </ReportedContentRevenue>
                <ReportedContentEmployees>
                  <ReportedContentHead>Employees Reported</ReportedContentHead>
                  <ReportedContentNumber>175,000</ReportedContentNumber>
                </ReportedContentEmployees>
              </CompanyBodyMainReportedContent>
              <CompanyBodyMainReportedHeader>Company Ticker</CompanyBodyMainReportedHeader>
              <CompanyTickerContain>
                <CompanyTickerText>NYSE: KGC</CompanyTickerText>
              </CompanyTickerContain>
              <CompanyBodyMainReportedHeader>Company Contacts</CompanyBodyMainReportedHeader>
              <CompanyContactContain>
                <CompanyContactFirst>
                  <CompanyContactWeb>
                    <CompanyContactWebIcon src={PlantIkon} />
                    <CompanyContactWebHref href="https://www.kinross.com">www.kinross.com</CompanyContactWebHref>
                  </CompanyContactWeb>
                  <CompanyContactPhone>
                    <CompanyContactWebIcon src={PhoneIcon} />
                    <CompanyContactWebHref href="tel:(416) 365-5123">(416) 365-5123</CompanyContactWebHref>
                  </CompanyContactPhone>
                </CompanyContactFirst>
                <CompanyContactSecond>
                  <CompanyContactWebIcon src={MapPinIcon} />
                  <CompanyContactLocation>
                    25 York St, 17th Fl Toronto Ontario Canada M5J 2V5
                  </CompanyContactLocation>
                </CompanyContactSecond>
              </CompanyContactContain>
              <CompanySocialImpact>
                <CompanySocialImpactTitle>Social Impact</CompanySocialImpactTitle>
                <ButtonRequestProf>
                  <ButtonPrime label="Request Profile Update" useButton={handleSubmit} height />
                </ButtonRequestProf>
              </CompanySocialImpact>
              <TypeInform>
                <TypeInformContainLeft>
                  <CompanyBodyMainReportedHeader>Type of Investment</CompanyBodyMainReportedHeader>
                  <TypeInformContain>
                    <TypeInformContainText>
                      No Information
                    </TypeInformContainText>
                  </TypeInformContain>
                </TypeInformContainLeft>
                <TypeInformContainRight>
                  <CompanyBodyMainReportedHeader>CSR Focus</CompanyBodyMainReportedHeader>
                  <TypeInformContain>
                    <TypeInformContainText>
                      No Information
                    </TypeInformContainText>
                  </TypeInformContain>
                </TypeInformContainRight>
              </TypeInform>
              <CompanyGoalAlignment>SDG Goal Alignment</CompanyGoalAlignment>
              <CompanyGoalIcons>No selected goal</CompanyGoalIcons>
              <CompanyBodyMainReportedHeader>Contributions</CompanyBodyMainReportedHeader>
              <CompanyContributionsContain>
                <CompanyContributionsContainTop>
                  <CompanyContributionsContainLeft>
                    <CompanyContributionsContainTitle>
                      Cash Contributions
                    </CompanyContributionsContainTitle>
                    <CompanyContributionsContainText>-</CompanyContributionsContainText>
                  </CompanyContributionsContainLeft>
                  <CompanyContributionsContainRight>
                    <CompanyContributionsContainTitle>
                      Employee Contributions
                    </CompanyContributionsContainTitle>
                    <CompanyContributionsContainText>-</CompanyContributionsContainText>
                  </CompanyContributionsContainRight>
                </CompanyContributionsContainTop>
                <CompanyContributionsContainBottom>
                  <CompanyContributionsContainLeft>
                    <CompanyContributionsContainTitle>
                      Total Social Contributions
                    </CompanyContributionsContainTitle>
                    <CompanyContributionsContainText>-</CompanyContributionsContainText>
                  </CompanyContributionsContainLeft>
                  <CompanyContributionsContainRight>
                    <CompanyContributionsContainTitle>
                      In-Kind Contributions
                    </CompanyContributionsContainTitle>
                    <CompanyContributionsContainText>-</CompanyContributionsContainText>
                  </CompanyContributionsContainRight>
                </CompanyContributionsContainBottom>
              </CompanyContributionsContain>
              <CompanyBodyMainReportedHeader>
                Charitable Focus & Programs
              </CompanyBodyMainReportedHeader>
              <CompanyFocusPrograms>No Information</CompanyFocusPrograms>
              <CompanyCompliant>GRI Compliant</CompanyCompliant>
              <CompanyFocusPrograms>Yes</CompanyFocusPrograms>
              <CompanySocialImpact>
                <CompanySocialImpactTitle>Customer Demographics</CompanySocialImpactTitle>
                <ButtonRequestProf>
                  <ButtonPrime label="Request Profile Update" useButton={handleSubmit} height />
                </ButtonRequestProf>
              </CompanySocialImpact>
            </CompanyBodyMainContent>
            <CompanyBodyRightSection />
          </CompanyBody>
        </MainContent>
      </ContentContain>
    </Root>
  );
};

export default CompanyScreen;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-width: 1200px;
  box-sizing: border-box;
  font-family: 'Rubik-Regular';
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

const HeadContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const HeadContentBack = styled.div`
  margin-right: 17px;
`;

const BackArrowImage = styled.div`
  transform: rotate(180deg);
  width: 11px;
  height: 18px;
  background-image: url(${Arrow});
`;

const HeadContentText = styled.h1`
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
  box-sizing: border-box;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0px auto;
  padding: 32px 20px 20px;
  text-align: start;
`;

const CompanyHead = styled.header`
  display: flex;
  justify-content: space-between;
  background: rgb(242, 242, 242);
  padding: 40px;
  align-items: center;
`;

const CompanyHeadContent = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyHeadIcon = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 100px;
  height: 100px;
  margin-right: 26px;
`;

const CompanyHeadTextInfoContain = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyHeadTextInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const CompanyHeadName = styled.h2`
  margin: 0;
  font-size: 24px;
  line-height: 150%;
  font-family: 'Rubik-Medium';
  color: #122434;
`;

const CompanyHeadFavoriteButton = styled.button`
  height: 40px;
  width: 40px;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 0;
  &:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
  };
`;

const FavoriteCompanyImageContain = styled.img`
  position: absolute;
`;

const FavoriteCompanyImage = styled.img`
  position: absolute;
`;

const CompanyHeadTextFiledOfActivity = styled.p`
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  color: #122434;
  max-width: 750px;
`;

const CompanyBody = styled.main`
  background: rgb(255, 255, 255);
  display: flex;
`;

const CompanyBodyMainContent = styled.section`
  padding: 32px 40px;
  border-right: 1px solid rgb(235, 235, 235);
  width: 100%;
  max-width: 730px;
  color: #122434;
  box-sizing: border-box;
`;

const CompanyBodyMainHeader = styled.h3`
  margin: 0 0 24px 0;
  box-sizing: border-box;
  font-size: 24px;
  line-height: 148%;
  font-family: 'Rubik-Medium';
`;

const CompanyBodyMainHeaderDescription = styled.h4`
  margin: 0 0 16px 0;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 148%;
  font-family: 'Rubik-Medium';
`;

const CompanyBodyMainDescription = styled.div`
  margin-bottom: 48px;
  position: relative;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 155%;
`;

const CompanyBodyMainReportedHeader = styled.h4`
  font-size: 16px;
  line-height: 146%;
  margin: 0 0 16px 0;
  font-family: 'Rubik-Medium';
`;

const CompanyBodyMainReportedContent = styled.div`
  width: 100%;
  border: 1px solid rgb(232, 232, 232);
  box-sizing: border-box;
  border-radius: 6px;
  margin-bottom: 32px;
  display: flex;
`;

const ReportedContentRevenue = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px 0px;
  border-right: 1px solid rgb(232, 232, 232);
`;

const ReportedContentHead = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  margin-bottom: 4px;
`;

const ReportedContentNumber = styled.p`
  font-family: 'Rubik-Medium';
  font-size: 16px;
  line-height: 145%;
`;

const ReportedContentEmployees = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px 0px;
`;

const CompanyTickerContain = styled.div`
  margin-bottom: 32px;
  border: 1px solid rgb(232, 232, 232);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 15px 26px;
  display: inline-block;
`;

const CompanyTickerText = styled.h4`
  margin: 0;
  font-family: 'Rubik-Medium';
  font-size: 24px;
  line-height: 148%;
`;

const CompanyContactContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 18px;
  border: 1px solid rgb(232, 232, 232);
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 50px;
`;

const CompanyContactFirst = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const CompanyContactSecond = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyContactWeb = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const CompanyContactWebIcon = styled.img`
  margin-right: 10px;
`;

const CompanyContactWebHref = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #123242;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  };
`;

const CompanyContactPhone = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyContactLocation = styled.p``;

const CompanySocialImpact = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const CompanySocialImpactTitle = styled.h3`
  margin: 0;
  font-family: 'Rubik-Medium';
  font-size: 24px;
  line-height: 148%;
`;

const ButtonRequestProf = styled.div`
 width: 178px;
`;

const TypeInform = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

const TypeInformContainLeft = styled.div`
  margin-right: 24px;
  width: 50%;
`;

const TypeInformContainRight = styled.div`
  width: 50%;
`;

const TypeInformContain = styled.div`
  border: 1px solid rgb(232, 232, 232);
  box-sizing: border-box;
  border-radius: 6px;
  padding: 24px;
`;

const TypeInformContainText = styled.div`
  font-size: 16px;
  line-height: 155%;
  display: flex;
  align-items: center;
  &::before{
    content: "";
    width: 6px;
    min-width: 6px;
    height: 6px;
    background: #2BAEE0;
    border-radius: 100%;
    margin-right: 8px;
  }
`;

const CompanyGoalAlignment = styled.h3`
  margin: 0;
  font-family: 'Rubik-Medium';
  font-size: 24px;
  line-height: 148%;
  margin-bottom: 24px;
`;

const CompanyGoalIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 15px;
  width: 112px;
  height: 112px;
  background: rgb(242, 242, 242);
  border-radius: 6px;
  font-family: 'Rubik-Medium';
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  margin-bottom: 20px;
`;

const CompanyContributionsContain = styled.div`
  width: 100%;
  border: 1px solid rgb(232, 232, 232);
  box-sizing: border-box;
  border-radius: 6px;
  margin-bottom: 32px;
`;

const CompanyContributionsContainTop = styled.div`
  display: flex;
`;

const CompanyContributionsContainBottom = styled.div`
  border-top: 1px solid rgb(232, 232, 232);
  display: flex;
`;

const CompanyContributionsContainLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px 0px;
  border-right: 1px solid rgb(232, 232, 232);
`;

const CompanyContributionsContainRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px 0px;
`;

const CompanyContributionsContainTitle = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  margin-bottom: 4px;
`;

const CompanyContributionsContainText = styled.p`
  font-family: 'Rubik-Medium';
  font-size: 16px;
  line-height: 145%;
`;

const CompanyFocusPrograms = styled.p`
  font-size: 16px;
  line-height: 155%;
  margin-bottom: 40px;
`;

const CompanyCompliant = styled.h3`
  margin: 0;
  font-family: 'Rubik-Medium';
  font-size: 24px;
  line-height: 148%;
`;

const CompanyBodyRightSection = styled.section`
  padding: 32px 40px;
  width: 100%;
  max-width: 366px;
  box-sizing: border-box;
`;
