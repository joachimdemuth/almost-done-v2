import queryString from 'querystring'

const client_id = process.env.NEXT_PUBLIC_CLIENT_ID
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET
const refresh_token = process.env.NEXT_PUBLIC_REFRESH_TOKEN


const db_client_id = process.env.NEXT_PUBLIC_DB_CLIENT_ID
const db_client_secret = process.env.NEXT_PUBLIC_DB_CLIENT_SECRET

var Buffer = require('buffer/').Buffer  // note: the trailing slash is important!
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const db = Buffer.from(`${db_client_id}:${db_client_secret}`).toString('base64')
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token"
const SPOTIFY_ENDPOINT = 'https://api.spotify.com/v1/me/top/'


import dropboxV2Api from "dropbox-v2-api";
import { Dropbox } from 'dropbox';

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryString.stringify({
            grant_type: 'refresh_token', refresh_token,
        }),
    })

    return response.json();

}

export const getDbAccessToken = async () => {
    const response = await fetch("https://api.dropboxapi.com/2/files/list_folder", {
        method: 'POST',
        headers: {
            Authorization: `Basic ${db}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "include_deleted":false,
            "include_has_explicit_shared_members":false,
            "include_media_info":false,
            "include_mounted_folders":true,
            "include_non_downloadable_files":true,
            "path":"/home/Almost%20Done",
            "recursive":false
        }),
    })

    return response.json();

}








export const fetchTopArtist = async (range:string,limit:string) => {
  // artists?time_range=long_term&limit=10
    const { access_token } = await getAccessToken()
    return fetch(`${SPOTIFY_ENDPOINT}artists?time_range=${range}&limit=${limit}`,
    {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
}

export const fetchTopSongs = async (range:string, limit:string) => {
    const { access_token } = await getAccessToken()
    return fetch(`${SPOTIFY_ENDPOINT}tracks?time_range=${range}&limit=${limit}`,
    {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
}

export const currentlyPlaying = async () => {
    const { access_token } = await getAccessToken()
    return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
}





