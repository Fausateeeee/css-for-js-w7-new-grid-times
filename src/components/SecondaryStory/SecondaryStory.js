import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <Abstract>{abstract}</Abstract>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    "image heading"
    "image abstract";
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "image"
      "heading"
      "abstract";
  }
`;

const Link = styled.a`
  border-bottom: 1px solid var(--color-gray-300);
  padding-bottom: 16px;
  padding-top: 16px;
  &:last-child {
    border: none;
    padding-bottom: 0;
  }
  &:first-child {
    padding-top: 0;
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;
`;

const Abstract = styled.p`
  grid-area: abstract;
  align-self: start;
  font-size: 1rem;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
<<<<<<< HEAD
  align-self: start;
=======
>>>>>>> dev
`;

export default SecondaryStory;
