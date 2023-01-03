import React, { useEffect, useState } from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import styled from "styled-components";
import { fetchTopArtist, fetchTopSongs, currentlyPlaying } from "../lib/fetches";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 96px;
  width: 80%;
`;

const CurrentlyPlaying = styled.div`
    display: flex;
    flex-direction: row;
    
    width: 100%;
    
    
    
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px;
        justify-content: flex-start;
        gap: 16px;
        min-width: 30%;
    border: 1px solid blue;
    border-radius: 8px;
    margin-bottom: 32px;
    }
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid blue;
    }

    p {
        color: blue;
        font-size: 18px;
    }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  gap: 16px;
  border: 1px solid blue;
  border-radius: 8px;
  margin-bottom: 32px;

  select {

background-color: transparent;
    border-radius: 8px;
    border: 1px solid blue;
    color: blue;
    font-size: 16px;
    font-weight: 600;
    padding: 8px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 32px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  width: 40%;

  border: 1px solid blue;
  border-radius: 8px;
`;

const ContainerTitle = styled.div`
  color: blue;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid blue;

  p {
    margin: 16px;
  }
`;

const ArtistItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 16px;
  width: 100%;
  justify-content: flex-start;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: #0000ff20;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid blue;
  }
  p {
    color: blue;
    font-size: 18px;
  }
`;

export interface dataFetch {
  artists: any;
  songData: any;
  currentSong: any;
}

export default function Spotify(props: dataFetch) {
  const { artists } = props;
  const { songData } = props;
  const { currentSong } = props;

  const [artistList, setArtistList] = useState<any>(artists);
  const [songList, setSongList] = useState<any>(songData);

  const [range, setRange] = useState<any>("long_term");
  const [playing, setPlaying] = useState<any>();


    useEffect(() => {
        currentSong && setPlaying(currentSong);
        const interval = setInterval(async () => {
            const res = await currentlyPlaying();
            const data = await res.json().catch((err:any) => console.log(err));
            setPlaying(data);
        }, 40000);
        return () => clearInterval(interval);
    }, []);

    const handleSelectChange = async (e: any) => {
        setRange(e.target.value);
        const res = await fetchTopArtist(e.target.value, "10");
        const artists = await res.json().catch((err) => console.log(err));
        setArtistList(artists);

        const songs = await fetchTopSongs(e.target.value, "10");
        const songData = await songs.json().catch((err) => console.log(err));
        setSongList(songData);
    };


  return (
    <Main>
        <CurrentlyPlaying>
            {playing ? <div><img src={playing.item.album.images[0].url} alt={playing.item.name} /> <p>{playing.item.album.artists[0].name} - </p><p>{playing.item.name}</p></div> : <p>Nothing is playing right now..</p>}

        </CurrentlyPlaying>
      <FilterContainer>
        <select
          onChange={handleSelectChange}
        >
          <option value="long_term">All Time</option>
          <option value="medium_term">Last 6 Months</option>
          <option value="short_term">Last 4 Weeks</option>
        </select>
      </FilterContainer>
      <ContentContainer>
        <ItemContainer>
          <ContainerTitle>
            <p>Top Artists</p>
          </ContainerTitle>
          {artistList.items.map((artist: any, index: number) => {
            return (
              <ArtistItem key={index}>
                <img src={artist.images[0].url} alt={artist.name} />
                <p>
                  {index + 1}. {artist.name}
                </p>
              </ArtistItem>
            );
          })}
        </ItemContainer>
        <ItemContainer>
          <ContainerTitle>
            <p>Top songs</p>
          </ContainerTitle>
          {songList.items.map((song: any, index: number) => {
            return (
              <ArtistItem key={index}>
                <img src={song.album.images[0].url} alt={song.name} />
                <p>
                  {index + 1}. {song.name}
                </p>
              </ArtistItem>
            );
          })}
        </ItemContainer>
      </ContentContainer>
    </Main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetchTopArtist("long_term", "10");
  const artists = await res.json().catch((err) => console.log(err));

  const songs = await fetchTopSongs("long_term", "10");
  const songData = await songs.json().catch((err) => console.log(err));

const playing = await currentlyPlaying();
//check if playing is null
if(!playing) return {
    props: { artists, songData, currentSong: null },
  };

const currentSong = await playing.json().catch((err) => console.log(err));



  return {
    props: { artists, songData, currentSong },
  };
};
