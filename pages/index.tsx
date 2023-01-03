import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { MainContainer, Header, Footer} from '../styles/mainStyles'
import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%
`
export default function Home() {
  return (
<>
      <Head>
        <title>Almost Done</title>
        <meta name="description" content="This website is almost done." />
        <link rel="icon" href="./favicon.png" />
      </Head>

    <Main>
      <h1>Almost Done</h1>
    </Main>
</>


  )
}
