import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { operations, selectors } from '../../state/ducks/ducks';
import routsConstant from '../../types/constant-routs';
import BlackArrow from '../../assets/images/black-arrow.svg';
import UploadDockIMG from '../../assets/images/upload.svg';
import Company from '../../components/CompanyContain';

const OneProspectScreen = () => {
  const user = useSelector(selectors.user.selectUser());
  const savedButton = false;
  const showInput = false;
  const viesItem = true;
  const isLastScreen = true;
  const isFirstScreen = false;
  // const nav = useNavigate();
  const onSubmit = () => {
    console.log(user);
    // nav('/');
  };

  return (
    <Root>
      <Head>
        <HeadContent>
          {!showInput && <HeadTitle>ad</HeadTitle>}
          {showInput && <HeadTitleInput defaultValue="ad" />}
          <HeadControlButton>
            {!savedButton && <EditButton>Edit</EditButton>}
            {savedButton && <SavedButton>Save</SavedButton>}
            <DeleteButton>Delete</DeleteButton>
          </HeadControlButton>
        </HeadContent>
      </Head>
      <ContentContain>
        <MainContent>
          <ProspectsSection>
            <ProspectScoreCompany>34 companies</ProspectScoreCompany>
            <ProspectsHead>
              <ProspectsFilters>
                <FiltersTitle>Filters</FiltersTitle>
              </ProspectsFilters>
              <ListFilter>
                {viesItem && (
                  <>
                    <ListItem>q</ListItem>
                    <ListItem>Gender: Both</ListItem>
                  </>
                )}
              </ListFilter>
            </ProspectsHead>
            <ProspectsContentHead>
              <ProspectsExport>
                <UploadImg src={UploadDockIMG} />
                <ProspectsExportTitle>Export to Excel</ProspectsExportTitle>
              </ProspectsExport>
              <ProspectsScreenSwitch>
                {isFirstScreen && <BackButton><BackArrow src={BlackArrow} /></BackButton>}
                <CountOfScreen>1-12 of 34</CountOfScreen>
                {isLastScreen && <ForwardButton><ForwardArrow src={BlackArrow} /></ForwardButton>}
              </ProspectsScreenSwitch>
            </ProspectsContentHead>
            <ProspectsMain>
              <Company />
              <Company />
              <Company />
              <Company />
              <Company />
              <Company />
              <Company />
            </ProspectsMain>
          </ProspectsSection>
        </MainContent>
      </ContentContain>
    </Root>
  );
};

export default OneProspectScreen;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-width: 1200px;
  box-sizing: border-box;
  text-align: start;
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
  text-align: start;
`;

const HeadContent = styled.div`
  width: 1096px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeadTitle = styled.p`
  font-size: 32px;
  line-height: 150%;
  font-family: 'Rubik-Medium';
  width: 800px;
  height: 48px;
  border: none;
  color: #122434;
  padding: 0px 2px;
`;

const HeadTitleInput = styled.input`
  width: 800px;
  height: 48px;
  font-family: 'Rubik-Medium';
  font-size: 32px;
  line-height: 150%;
  border: none;
  color: #122434;
  &:active{
    border: 0;
  };
  &:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
  };
`;

const HeadControlButton = styled.div`
  display: flex;
`;

const EditButton = styled.button`
  border-radius: 6px;
  border: 1px solid rgb(43, 174, 224);
  background: rgb(255, 255, 255);
  padding: 8px 0px;
  width: 82px;
  color: #122434;
  font-size: 12px;
  line-height: 150%;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    background: rgb(235, 249, 255);
    color: rgb(43, 174, 224);
  };
  &:active{
    background: rgb(202, 240, 255);
    color: rgb(43, 174, 224);
  };
`;

const SavedButton = styled.button``;

const DeleteButton = styled.button`
  line-height: 150%;
  border-radius: 6px;
  border: 1px solid rgb(232, 232, 232);
  color: #F05658;
  background: rgb(255, 255, 255);
  font-size: 12px;
  padding: 8px 0px;
  width: 76px;
  &:hover{
    border-color: #BFBFBF;
  };
  &:active{
    border-color: #F05658;
  }
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
  margin-bottom: 23px;
`;

const ProspectScoreCompany = styled.h2`
  font-size: 16px;
  line-height: 145%;
  color: #123424;
  font-family: 'Rubik-Medium';
  font-style: normal;
  margin: 0 0 24px 0;
  text-align: start;
`;

const ProspectsFilters = styled.div`
  display: flex;
`;

const FiltersTitle = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  margin: 0 0 8px 0;
`;

const ListFilter = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0px 14px;
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

const ProspectsContentHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 27px;
`;

const ProspectsExport = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  &:hover{
    text-shadow: 0 0 0.01px #122434,0 0 0.01px #122434;
  }
`;

const UploadImg = styled.img`
  margin-right: 10px;
`;

const ProspectsExportTitle = styled.p`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
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
