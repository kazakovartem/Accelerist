import React from 'react';
import styled from 'styled-components';

interface LastLoginContainProps {
  label: string;
  num: number;
}

interface ContentContainerProps {
  border: string;
}

const LastLoginContain: React.FC<LastLoginContainProps> = ({ label, num }) => {
  const viesItem = label;

  return (
    <Root>
      <OwnerIcon>TT</OwnerIcon>
      <ContentContainer border={num === 3 ? '0' : '1'}>
        <OwnerName>{label}</OwnerName>
        <DateLastLogin>17 Mar 2022</DateLastLogin>
      </ContentContainer>
    </Root>
  );
};

export default React.memo(LastLoginContain);

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Rubik-Regular';
`;

const OwnerIcon = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: rgb(215, 61, 50);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 12px;
  margin-right: 10px;
`;

const ContentContainer = styled.div<ContentContainerProps>`
  width: 94%;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0px;
  &:not(:first-child) {
    border-bottom: ${(props) => props.border}px solid rgb(238, 238, 238);
  }
`;

const OwnerName = styled.p`
  font-family: 'Rubik-Medium';
  line-height: 150%;
`;

const DateLastLogin = styled.p`
  color: #737373;
`;
