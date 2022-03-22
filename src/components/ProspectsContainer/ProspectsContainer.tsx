import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ProspectsContainerProps {
  viewFilter: boolean;
}

const ProspectsContainer: React.FC<ProspectsContainerProps> = ({ viewFilter }) => {
  const viesItem = viewFilter;

  return (
    <Root>
      <Header>
        <TitleHeader to="/">ad</TitleHeader>
      </Header>
      <MainContent>
        <FiltersSelect>Filters</FiltersSelect>
        <ListFilter>
          {viesItem && (
            <>
              <ListItem>q</ListItem>
              <ListItem>Gender: Both</ListItem>
            </>
          )}
        </ListFilter>
        <ResultFiltered>
          <NumberProspectTitle>№ of Prospects Available</NumberProspectTitle>
          <QuantityProspect>34</QuantityProspect>
        </ResultFiltered>
        <OwnerInformation>
          <OwnerMainInform>
            <OwnerIcon>
              <OwnerShortName>TT</OwnerShortName>
            </OwnerIcon>
            <OwnerPersonalInform>
              <OwnerName>Test Test</OwnerName>
              <OwnerRole>Owner</OwnerRole>
            </OwnerPersonalInform>
          </OwnerMainInform>
          <LastActive>
            <LastActiveLabel>Last Activity</LastActiveLabel>
            <LastActiveTime>20 Feb 2022</LastActiveTime>
          </LastActive>
        </OwnerInformation>
      </MainContent>
    </Root>
  );
};

export default React.memo(ProspectsContainer);

const Root = styled.section`
  width: 536px;
  background: rgb(255, 255, 255);
  border-radius: 6px;
  padding: 24px;
  box-sizing: border-box;
  text-align: start;
`;

const Header = styled.header`
  width: 100%;
  padding-bottom: 9px;
  border-bottom: 1px solid rgb(232, 232, 232);
  margin-bottom: 16px;
  cursor: pointer;
`;

const TitleHeader = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  line-height: 145%;
  color: #122434;
  font-family: 'Rubik-Medium';
  &:hover {};
`;

const MainContent = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FiltersSelect = styled.span`
  box-sizing: border-box;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  font-family: 'Rubik-Regular';
  width: 100%;
  margin-bottom: 8px;
`;

const ListFilter = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0px 4px;
  box-sizing: border-box;
  font-family: 'Rubik-Regular';
  margin-bottom: 24px;
`;

const ListItem = styled.li`
  border: 1px solid #CAF0FF;
  box-sizing: border-box;
  border-radius: 6px;
  background: rgb(255, 255, 255);
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  padding: 6px 10px;
  margin-right: 8px;
`;

const ResultFiltered = styled.div`
  background: #F9F9F9;
  width: 100%;
  border-radius: 4px;
  height: 71px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Rubik-Regular';
  margin-bottom: 24px;
`;

const NumberProspectTitle = styled.h6`
  margin: 0;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  margin-bottom: 8px;
`;

const QuantityProspect = styled.span`
  font-family: 'Rubik-Medium';
  font-size: 24px;
  line-height: 148%;
  color: #122434;
`;

const OwnerInformation = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OwnerMainInform = styled.div`
  display: flex;
`;

const OwnerIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgb(215, 61, 50);
  border-radius: 100%;
  display: flex;
  justify-content: row;
  align-items: center;
  justify-content: center;  
`;

const OwnerShortName = styled.span`
  color: #FFFFFF;
  font-family: 'Rubik-Regular';
  font-size: 14px;
`;

const OwnerPersonalInform = styled.div`
  font-family: 'Rubik-Regular';
  font-size: 12px;
  margin-left: 12px;
`;

const OwnerName = styled.p`
  font-family: 'Rubik-Medium';
  line-height: 150%;
  margin-bottom: 4px;
`;

const OwnerRole = styled.p`
  line-height: 150%;
  color: #737373;
`;

const LastActive = styled.div`
  font-family: 'Rubik-Regular';
  font-size: 12px;
`;

const LastActiveLabel = styled.p`
  color: #737373;
  line-height: 150%;
`;

const LastActiveTime = styled.p`
  color: #122434;
  line-height: 150%;
`;
