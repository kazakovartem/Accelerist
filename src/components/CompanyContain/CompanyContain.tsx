import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CompanyLabelImage from '../../assets/images/void-company-label.svg';
import like from '../../assets/images/like-active.svg';
import likeContain from '../../assets/images/like-de-active.svg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProspectsContainerProps {}

const ProspectsContainer: React.FC<ProspectsContainerProps> = () => {
  const isFavorite = false;

  return (
    <Root>
      <CompanyLabelContain>
        <CompanyLabelMain>
          <CompanyLabel src={CompanyLabelImage} />
        </CompanyLabelMain>
        <CompanyLabelFooter>
          <LabelFooterPriority>Priority Ranking</LabelFooterPriority>
          <LabelFooterPriorityNumber>4</LabelFooterPriorityNumber>
        </CompanyLabelFooter>
      </CompanyLabelContain>
      <CompanyMainInform>
        <MainInformHead>
          <MainInformHeadLink to="/">Kinross</MainInformHeadLink>
          <InformLocation>25 York St, 17th Fl Toronto Ontario Canada M5J 2V5</InformLocation>
          <InformPhone>(416) 365-5123</InformPhone>
        </MainInformHead>
        <MainInformBody>
          <MainInformBodyLeft>
            <CSRFocus>CSR Focus</CSRFocus>
            <CSRFocusInform>No information</CSRFocusInform>
          </MainInformBodyLeft>
          <MainInformBodyRight>
            <MainInformBodyRevenue>Revenue</MainInformBodyRevenue>
            <MainInformBodyRevenueCost>$ 3,500,000</MainInformBodyRevenueCost>
          </MainInformBodyRight>
        </MainInformBody>
        <MainInformFooter>
          <LikeButton>
            <LikeImgContain src={likeContain} />
            {isFavorite && <LikeImgContain src={like} />}
          </LikeButton>
          <LinkToProfile to="/">Profile</LinkToProfile>
        </MainInformFooter>
      </CompanyMainInform>
    </Root>
  );
};

export default React.memo(ProspectsContainer);

const Root = styled.section`
  box-sizing: border-box;
  text-align: start;
  width: 536px;
  min-height: 268px;
  background: rgb(255, 255, 255);
  border-radius: 6px;
  margin: 12px;
  padding: 26px 32px;
  display: flex;
  position: relative;
`;

const CompanyLabelContain = styled.div`
  border: 1px solid rgb(232, 232, 232);
  box-sizing: border-box;
  border-radius: 6px;
  width: 168px;
  height: 216px;
  margin-right: 16px;
`;

const CompanyMainInform = styled.div`
  width: 100%;
`;

const CompanyLabelMain = styled.div`
  min-width: 166px;
  height: 156px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(232, 232, 232);
`;

const CompanyLabel = styled.img`
  box-sizing: border-box;
`;

const CompanyLabelFooter = styled.div`
  text-align: center;
`;

const LabelFooterPriority = styled.p`
  color: #737373;
  margin: 8px 0px 2px;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
`;

const LabelFooterPriorityNumber = styled.p`
  font-family: 'Rubik-Medium';
  font-size: 16px;
  line-height: 145%;
  color: #122434;
`;

const MainInformHead = styled.div`
  min-height: 100px;
`;

const MainInformHeadLink = styled(Link)`
  text-decoration: none;
  display: block;
  font-family: 'Rubik-Medium';
  font-size: 16px;
  line-height: 145%;
  color: #122434;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 285px;
  &:hover{
    text-decoration: underline;
  }
`;

const InformLocation = styled.p`
  display: -webkit-box;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 36px;
  line-height: 150%;
  color: #737373;
  font-size: 12px;
  margin-bottom: 4px;
`;

const InformPhone = styled.p`
  margin-bottom: 28px;
  line-height: 150%;
  color: #737373;
  font-size: 12px;
`;

const MainInformBody = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(232, 232, 232);
  margin-bottom: 24px;
  width: 100%;
`;

const MainInformBodyLeft = styled.div`
  max-width: 170px;
  width: 100%;
  border-right: 1px solid rgb(232, 232, 232);
  padding: 0px 20px 12px 0px;
`;

const CSRFocus = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  margin-bottom: 4px;
`;

const CSRFocusInform = styled.p`
  font-style: normal;
  font-family: 'Rubik-Medium';
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MainInformBodyRight = styled.div`
  padding: 0px 0px 12px 20px;
  width: 100%;
`;

const MainInformBodyRevenue = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  margin-bottom: 4px;
  text-align: right;
`;

const MainInformBodyRevenueCost = styled.p`
  font-style: normal;
  font-family: 'Rubik-Medium';
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  text-align: right;
`;

const MainInformFooter = styled.div`
  display: flex;
  align-items: center;
`;

const LikeButton = styled.button`
  height: 40px;
  width: 40px;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(232, 232, 232);
  margin-right: 8px;
  background: 0px center;
  cursor: pointer;
  position: relative;
  &:hover{
    border-color: #F05658;
  }
`;

const LikeImgContain = styled.img`
  width: 20;
  height: 18;
  position: absolute;
`;

const LinkToProfile = styled(Link)`
  text-decoration: none;
  flex: 1 1 0%;
  color: #2BAEE0;
  text-align: center;
  font-weight: normal;
  border-radius: 6px;
  border: 1px solid rgb(43, 174, 224);
  padding: 10px 0px;
  background: rgb(255, 255, 255);
  font-size: 12px;
  line-height: 150%;
  &:hover{
    background: rgb(235, 249, 255);
    color: rgb(43, 174, 224);
  }
`;
