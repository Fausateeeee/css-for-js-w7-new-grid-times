import React from "react";
import styled from "styled-components/macro";
import format from "date-fns/format";
import { QUERIES } from "../../constants";
<<<<<<< HEAD

=======
>>>>>>> dev
const Logo = (props) => {
  return (
    <Wrapper>
      <Link href="/" {...props}>
        New Grid Times
      </Link>
      <TodaysDate>{format(new Date(), "EEEE, MMMM do, yyyy")}</TodaysDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Link = styled.a`
  font-family: var(--font-family-logo);
  font-size: 3rem;
<<<<<<< HEAD
  @media (${QUERIES.tabletAndUp}) {
=======

  @media ${QUERIES.tabletAndUp} {
>>>>>>> dev
    font-size: ${64 / 16}rem;
  }
`;

const TodaysDate = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  margin-top: -1rem;
`;

export default Logo;
