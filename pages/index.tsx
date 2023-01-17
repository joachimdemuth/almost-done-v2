import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { MainContainer, Header, Footer } from "../styles/mainStyles";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  flex: 1;
  color: ${(props) => props.theme.colors.blue};

  h1 {
    font-size: 80px;
    font-weight: 900;
    font-style: italic;
    line-height: 1.2;
    text-align: center;
  }

  p {
    font-family: 'Work Sans';
font-style: italic;
font-weight: 400;
font-size: 24px;
line-height: 28px;
text-align: center;
  }
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>ALMOST DONE</title>
        <meta name="description" content="This website is almost done." />
        <link rel="icon" href="./favicon.png" />
      </Head>

      <Main>
        <h1>ALMOST DONE</h1>
        <p>EMBRACING IMMEDIATE IDEAS</p>
      </Main>
    </>
  );
}
