import React from "react";
import styled from "styled-components";
import Image from "next/image";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 181px;
    height: 279px;
    border-radius: 1.75rem;
    border: 1px solid blue;
    margin-bottom:16px;
    position: relative;
`;

const ImageContainer = styled.div`
    display: flex;
    min-height: 181px;
    width: 100%;
    border-bottom: 1px solid blue;

`;

const NftImage = styled.img`
border-radius: 1.75rem 1.75rem 0 0;
    max-width: 100%;
    height: auto;
    justify-content: center;
    align-self: center;

`;
const MetaContainer = styled.div`
    display: flex;
    flex-direction: column;
    color:blue;
    justify-content: space-between;
    font-size: 14px;
    margin: 8px 8px 16px 8px;
    height: 100%;
`;

const TitleAndNumber = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TextElement = styled.p``;

const ImageLink = styled.div`
    color: blue;
    font-size: 14px;
    font-weight: 400;
    text-decoration: underline;
`;


interface NftCardProps {
  url: string;
  title: string;
  number: string;
  link: string;
}

export default function NftCard(props: NftCardProps) {
  return (
    <CardContainer>
      <ImageContainer>
        <NftImage src={props.url} alt={props.title} />


      </ImageContainer>
      <MetaContainer>
        <TitleAndNumber>
          <TextElement>{props.title}</TextElement>
          <TextElement>{props.number}</TextElement>
        </TitleAndNumber>
        <ImageLink>
            <a href={props.url} target="_blank" rel="noreferrer" >

            <TextElement>See full image</TextElement>
            </a>

        </ImageLink>
      </MetaContainer>
    </CardContainer>
  );
}
