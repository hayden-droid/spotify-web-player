import * as Icon from '../component/icons'
import React from 'react'

export default {
  MOBILE_SIZE: 640,
}

export const MENU = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeActive />
  },
  {
    title: 'Search',
    path: '/search',
    icon: <Icon.Search />,
    iconSelected: <Icon.SearchActive />
  },
  {
    title: 'Libary',
    path: '/library',
    icon: <Icon.Library />,
    iconSelected: <Icon.LibraryActive />
  }
]

export const PLAYLISTBTN = [
    {
      title: 'Create Playlist',
      path: '/',
      ImgName: 'createPlaylist',
    },
    {
      title: 'Favorite Songs',
      path: '/',
      ImgName: 'popularSong',
    }
]

export const LIBRARYTABS = [
  {
    title: 'Playlists',
    path: '/library'
  },
  {
    title: 'Podcasts',
    path: '/library/podcasts'
  },
  {
    title: 'Artists',
    path: '/library/artists'
  },
  {
    title: 'Albums',
    path: '/library/albums'
  }
]
