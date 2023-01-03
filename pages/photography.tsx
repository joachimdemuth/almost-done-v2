import React, { useEffect } from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { getDbAccessToken } from "../lib/fetches";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 96px;
  width: 80%;
`;



export default function Photography() {

  useEffect(() => {
    const getAccessToken = async () => {
      const accessToken = await getDbAccessToken();
      console.log(accessToken);
    };

    getAccessToken();
  }, [])
        



    return (
        <Main>
        <h1>Photography</h1>
        </Main>
    );
}