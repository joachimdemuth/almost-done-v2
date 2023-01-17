import React from "react";
import styled from "styled-components";
import Image from "next/image";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  border-radius: 16px;
  border: 1px solid blue;
  padding: 16px;
  gap: 16px;
  margin-bottom: 16px;
  position: relative;
  background: #ff450099;
  backdrop-filter: blur(11.5px);
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
`;

const NftImage = styled.img`
  border-radius: 8px;
  max-width: 100%;
  max-height: 100%;
`;
const MetaContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: blue;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin: 8px 8px 16px 8px;
  height: 100%;
`;

const TitleAndNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  margin: 0;
  color: ${({ theme }) => theme.colors.blue};
`;

const TextElement = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
  margin: 0;
  color: ${({ theme }) => theme.colors.blue};
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
  border:none;
  border-radius: 50px;
  padding: 8px 24px;
color: ${({ theme }) => theme.colors.orange};

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
          <Title>{props.title}</Title>
          <TextElement>{props.number}</TextElement>
        </TitleAndNumber>
        <Button>
          {/* add props.url to the button link */}
          Vis
        </Button>
      </MetaContainer>
    </CardContainer>
  );
}
