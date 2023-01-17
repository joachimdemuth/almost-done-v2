import React from "react";
import { Header, Footer, MainContainer } from "../styles/mainStyles";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FloatingNav from "./FloatingNav";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  a {
    color: #0016da;
    text-decoration: none;
    font-size: 1.2rem;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;
const BrandName = styled.p`
  font-size: 2rem;
  font-style: italic;
  font-weight: 600;
  color: #0016da;
`;

export default function Layout({ children }: any) {
  return (
    <MainContainer>
      {/* <Header>
        <LogoContainer>
         
          <BrandName>
          <Link href="/">
          Almost Done
          </Link>
          </BrandName>
        </LogoContainer>
        <Nav>
          <Link href="/gallery">NFT Gallery</Link>
          <Link href="/spotify">Spotify</Link>
          <Link href="/photography">Photograpy</Link>
          <Link href="/contact">Contact</Link>
        </Nav>
      </Header> */}
      {children}
    
      <FloatingNav />
        
    </MainContainer>
  );
}
