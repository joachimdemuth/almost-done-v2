import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NftCard from "../components/NftCard";

import { GetServerSideProps } from "next";

const Main = styled.main`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
width: 80%;
padding-top: 96px;
gap:32px;
z-index: 1;
`;

const Title = styled.h1`
  font-size: 254px;
  text-align: center;
  font-weight: 900;
  font-style: italic;
  z-index: 0;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.blue};
  position: fixed;
  top: 50%;
  left: 50%;

  `;


export interface dataFetch {
  data: any;
}

export default function Gallery(props: dataFetch) {
  const { data } = props;


  const nfts = data.nfts;
  const sortedNfts = nfts.filter((nft: any) => nft.metadata);

  return (
    <Main>
      <Title>NFTS</Title>
      {sortedNfts.map((nft: any, index: number) => {
        return (
          <NftCard
            key={index}
            url={nft.metadata.image}
            title={nft.metadata.name.split("#")[0]}
            number={`#${nft.metadata.name.split("#")[1]}`}
            link={nft.metadata.external_url}
          />
        );
      })}
    </Main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "https://api.nftport.xyz/v0/solana/accounts/558acsgeuPDFQwdCTM8LWjgyiiZCPyoS9iXts1KAWRCW?include=metadata",
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_NFT_AUTH_CODE || "",
      },
    }
  );

  const data = await res.json().catch((err) => console.log(err));
  const continuation = data.continuation;

    const secondRes = await fetch(`https://api.nftport.xyz/v0/solana/accounts/558acsgeuPDFQwdCTM8LWjgyiiZCPyoS9iXts1KAWRCW?continuation=${continuation}&include=metadata`, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_NFT_AUTH_CODE || "",
      },
    });
const secondData = await secondRes.json().catch((err) => console.log(err));

//push secondData.nfts to data.nfts
  data.nfts.push(...secondData.nfts)



  return {
    props: { data },
  };
};
