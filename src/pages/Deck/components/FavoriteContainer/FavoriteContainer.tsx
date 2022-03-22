import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CompanyImg from '../../../../assets/images/void-company-label.svg';

interface FavoriteContainerProps {
  label: string;
}

const FavoriteContainer: React.FC<FavoriteContainerProps> = ({ label }) => {
  const viesItem = label;

  return (
    <Root>
      <CompanyInformation>
        <CompanyLogo>
          <CompanyLogoImage src={CompanyImg} alt="" />
        </CompanyLogo>
        <CompanyTextInform>
          <CompanyName to="/">{label}</CompanyName>
          <CompanyPriority>Priority Ranking 4</CompanyPriority>
        </CompanyTextInform>
      </CompanyInformation>
      <FocusLabel>CSR Focus</FocusLabel>
      <FieldOfActivity>No information qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</FieldOfActivity>
    </Root>
  );
};

export default React.memo(FavoriteContainer);

const Root = styled.div`
  width: 256px;
  min-height: 156px;
  background: rgb(255, 255, 255);
  border-radius: 6px;
  margin: 12px;
  padding: 24px;
  font-size: 12px;
  line-height: 150%;
  font-family: 'Rubik-Regular';
  text-align: start;
`;

const CompanyInformation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CompanyLogo = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid rgb(232, 232, 232);
  box-sizing: border-box;
  border-radius: 6px;
  margin-right: 12px;
  min-width: 48px;
`;

const CompanyLogoImage = styled.img`
  width: 22px;
`;

const CompanyTextInform = styled.div``;

const CompanyName = styled(Link)`
  text-decoration: none;
  font-family: 'Rubik-Medium';
  display: inline-block;
  width: 140px;
  line-height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #122434;
  &:hover {
    text-decoration: underline;
  };
`;

const CompanyPriority = styled.p`
  color: #737373;
`;

const FocusLabel = styled.p`
  margin-bottom: 4px;
  color: #737373;
`;

const FieldOfActivity = styled.p`
  font-family: 'Rubik-Medium';
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
