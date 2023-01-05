import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import dropboxV2Api from "dropbox-v2-api";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 96px;
  width: 80%;
`;

// export interface dataFetch {
//   data: any;
// }


export default function Photography() {

const APP_KEY = process.env.NEXT_PUBLIC_DB_CLIENT_ID;
const APP_SECRET = process.env.NEXT_PUBLIC_DB_CLIENT_SECRET;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_DB_ACCESS_TOKEN;
const folderPath = "/almost done"



const [files, setFiles] = useState([]);

useEffect(() => {
  // Replace these with your own access token and folder path
  const access_token = process.env.NEXT_PUBLIC_DB_ACCESS_TOKEN;
  const folder_path = '/home/Almost Done/NYC';

  // Get a list of files in the folder
  const list_url = 'https://api.dropboxapi.com/2/files/list_folder';
  const list_headers = {
    'Authorization': 'Bearer ' + access_token,
    'Content-Type': 'application/json'
  };
  const list_data = {
    'path': folder_path
  };
  fetch(list_url, {
    method: 'POST',
    headers: list_headers,
    body: JSON.stringify(list_data)
  })
    .then(response => response.json())
    .then(data => {
      setFiles(data['entries']);
    })
    .catch(error => {
      // There was an error getting the list of files
    });
}, []);
        



    return (
        <Main>
        <h1>Photography</h1>
        </Main>
    );
}


// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const APP_KEY = process.env.NEXT_PUBLIC_DB_CLIENT_ID;
//   const APP_SECRET = process.env.NEXT_PUBLIC_DB_CLIENT_SECRET;
//   const ACCESS_TOKEN = process.env.NEXT_PUBLIC_DB_ACCESS_TOKEN;
//   const folderPath = "/almost done"

//   const dbx = dropboxV2Api.authenticate({
//     token: ACCESS_TOKEN,
//   });

//   const response = await dbx({
//     resource: "files/list_folder",
//     parameters: {
//       'path': "home/Almost Done/NYC",
    
//     },
//   });

//   const folder = fetch("https://api.dropboxapi.com/2/files/list_folder", {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${ACCESS_TOKEN}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       path: folderPath,
//     }),

//   })
//   const data = JSON.parse(JSON.stringify(folder['entries']))

// console.log(data)

 
 
 
//   return {
//     props: {data},
//   };
// }