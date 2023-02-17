import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <UserActionGroup>
            <button>
              <User size={24} />
            </button>
          </UserActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <SubscribeButton>Subscribe</SubscribeButton>
          <SubscribeLink>Already a subscriber?</SubscribeLink>
        </SubscribeWrapper>
      </MainHeader>
      <DesktopAction>
        <SubscribeButton>Subscribe</SubscribeButton>
        <DesktopLink href="/">Already a subscriber?</DesktopLink>
      </DesktopAction>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    align-items: baseline;
    padding: 0px 122px;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
<<<<<<< HEAD
  @media (${QUERIES.laptopAndUp}) {
    background-color: transparent;
    color: var(--color-gray-900);
=======

  @media ${QUERIES.laptopAndUp} {
    display: none;
>>>>>>> dev
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-evenly;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  @media (${QUERIES.laptopAndUp}) {
    gap: 32px;
  }
`;

const UserActionGroup = styled(ActionGroup)`
  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
<<<<<<< HEAD
  @media (${QUERIES.tabletAndUp}) {
    margin-top: 48px;
    margin-bottom: 72px;
  }
  @media (${QUERIES.laptopAndUp}) {
    margin-top: 16px;
    margin-bottom: 80px;
  }
`;

const DesktopAction = styled.div`
  display: none;
  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const SubscribeButton = styled(Button)`
  padding-top: 11px;
  padding-bottom: 5px;
`;

const DesktopLink = styled.a`
  text-decoration: underline;
  font-style: italic;
  font-weight: var(--font-weight-normal);
  font-family: var(--font-family-serif);
  font-size: ${14 / 16}rem;
  line-height: 22px;
=======

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
    justify-items: start;
    margin-top: 16px;
    margin-bottom: 72px;
  }
>>>>>>> dev
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: revert;
    position: relative;
    justify-self: end;
  }
`;

const SubscribeButton = styled(Button)``;

const SubscribeLink = styled.a`
  position: absolute;
  font-size: ${14 / 16}rem;
  margin-top: 8px;
  width: 100%;
  color: var(--color-gray-900);
  text-decoration: underline;
  text-align: center;
  font-style: italic;
`;
export default Header;
