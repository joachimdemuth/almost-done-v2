import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const Container = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
z-index: 99;
position: fixed;
  bottom: 24px;
  horizontal-align: center;
  background: rgba(0, 0, 255, 0.8);
  color: ${({ theme }) => theme.colors.orange};
  padding: 8px;
  border-radius: 50px;
  gap: 16px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

interface ItemContainerProps {
    active?: boolean;
}

const ItemContainer = styled.div<ItemContainerProps>`
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding: 16px 24px;
    gap: 10px;
    border-radius: 32px;
    background-color: ${({ theme, active }) => active ? theme.colors.orange : "transparent"};

    a {
        color: ${({ theme, active }) => active ? theme.colors.blue : theme.colors.orange};
    }
 

    
`;

const Item = styled(Link)`
  color: ${({ theme }) => theme.colors.orange};
  text-decoration: none;
  font-size: 24px;
  font-style: italic;
  font-weight: 500;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.orange};
    visibility: hidden;
  }

  &:hover::after {
    visibility: visible;
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.colors.orange};
    animation: underline 0.3s ease-in-out;
    animation-fill-mode: forwards;
  }

    @keyframes underline {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }

 
`;

const FloatingNav = () => {
    const [page, setPage] = React.useState("home");

    const router = useRouter();

    //get current router path

    useEffect(() => {
        if(router.pathname === "/" || router.pathname === "") {
            setPage("home")
        } 
        setPage(router.pathname)
        console.log(router.pathname)
    }, [router.pathname])


  return (
    <Container>
        <ItemContainer active={page.includes("home")} >
      <Item href="/">HOME</Item>
        </ItemContainer>
        <ItemContainer active={page.includes("gallery")}>
      <Item href="/gallery">NFTS</Item>
        </ItemContainer>
        <ItemContainer active={page.includes("music")}>

      <Item href="/spotify">MUSIC</Item>
        </ItemContainer>
        <ItemContainer active={page.includes("photos")}>

      <Item href="/photography">PHOTOS</Item>
        </ItemContainer>
        <ItemContainer active={page.includes("contact")}>

      <Item href="/contact">HMU</Item>
        </ItemContainer>
    </Container>
  );
};

export default FloatingNav;
