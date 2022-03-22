import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from '../../state/ducks/ducks';
import logo from '../../assets/images/logo-main-screen.svg';
import routsConstant from '../../types/constant-routs';
import IconDefaultUser from '../../assets/images/user-default-icon.svg';

interface PropsIconUser {
  imageSrc: string;
}

const HeaderContent = () => {
  const nav = useNavigate();
  const team = useSelector(selectors.team.selectTeam());
  const user = useSelector(selectors.user.selectUser());
  const [showMenuPopup, setShowMenuPopup] = useState(false);
  const logoImg = `https://accelerist.s3.amazonaws.com/${team.logoKey}?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIZDX3DWLMFIETGPA%2F20220318%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220318T135313Z&X-Amz-Expires=5000&X-Amz-Signature=5ade0ce8f45ad99680b451b86d006bbe0eedb763f6de89ea3a2deb2f1bb76d1e&X-Amz-SignedHeaders=host`;

  const handleReturnToDashBoard = () => {
    nav(routsConstant.DASHBOARD);
  };

  const handleShowUserPopup = () => {
    setShowMenuPopup(true);
  };

  const handleHideUserPopup = () => {
    if (showMenuPopup) {
      setShowMenuPopup(false);
    }
  };

  return (
    <Root onClick={handleHideUserPopup}>
      <Header>
        <HeaderContainer>
          <LogoContainer>
            <PointerRedirect onClick={handleReturnToDashBoard}>
              <Logo src={logo} alt="main logo" />
              <TextHeader>ACCELERIST</TextHeader>
            </PointerRedirect>
          </LogoContainer>
          <UserContainer>
            <UserMenu>
              <ThisUser onClick={handleShowUserPopup}>
                {team.logoKey && <UserIcon imageSrc={logoImg} />}
                {!team.logoKey && (
                  <UserNotKeyIcon>
                    <IkonSVG src={IconDefaultUser} />
                  </UserNotKeyIcon>
                )}
                <NameUser>No name</NameUser>
              </ThisUser>
              {showMenuPopup && <PopupMenu>Log out</PopupMenu>}
            </UserMenu>
          </UserContainer>
        </HeaderContainer>
      </Header>
      <Outlet />
    </Root>
  );
};

export default React.memo(HeaderContent);

const Root = styled.div`

`;

const Header = styled.header`
  height: 80px;
  width: 100%;
  width: 100%;
  min-width: 1200px;
  background-color: rgb(213, 243, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: 'Rubik-regular';
`;

const LogoContainer = styled.div`
  min-width: 730px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  
`;

const PointerRedirect = styled.span`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img`
  height: 47px;
  width: 46px;
  margin-right: 13px;
`;

const TextHeader = styled.h1`
  font-size: 18px;
  font-family: 'Rubik-Medium';
  color: #122434;
  margin-top: 3px;
  line-height: 145%;
  letter-spacing: 3.2px;
  font-weight: 500;
`;

const UserContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  flex: 1 1 0%;
`;

const UserMenu = styled.div`
  width: 100%;
  max-width: 177px;
  cursor: pointer;
  position: relative;
`;

const ThisUser = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const UserIcon = styled.div<PropsIconUser>`
  border-radius: 8px;
  width: 36px;
  height: 36px;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  margin-right: 12px;
  background-image: url(${(props) => props.imageSrc});
`;

const UserNotKeyIcon = styled.div`
  border-radius: 6px;
  width: 36px;
  height: 36px;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  margin-right: 12px;
  background: rgb(255, 255, 255);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IkonSVG = styled.img`
  width: 20px;
  height: 20px;
`;

const NameUser = styled.p`
  font-size: 12px;
  line-height: 150%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 48px);
`;

const PopupMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 48px;
  color: #F05658;
  font-size: 12px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(40 31 61 / 4%) 0px 2px 20px;
  border-radius: 6px;
  padding: 24px;
  z-index: 9;
`;
