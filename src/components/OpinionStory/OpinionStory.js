import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <ArticleWrapper>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </ArticleWrapper>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  border-bottom: 1px solid var(--color-gray-300);
  padding-bottom: 16px;
  padding-top: 16px;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  @media (${QUERIES.tabletOnly}) {
    border-bottom: none;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 48px;
  grid-template-areas: "article avatar";
  @media (${QUERIES.tabletOnly}) {
    grid--template-rows: 48px 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "avatar"
      "article";
    align-self: end;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  float: right;
  margin-left: 16px;
  @media ${QUERIES.tabletOnly} {
    float: revert;
    margin-left: revert;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
