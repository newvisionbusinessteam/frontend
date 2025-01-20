import React from 'react'
import HomeAbout from '../components/HomeAbout'
import Reviews from '../components/Reviews'
import Outlets from './Outlets'
import Scuzo from '../components/Scuzo'
import Figaro from '../components/Figaro'

export const Home = () => {
  return (
    <>
        <Scuzo/>
        <HomeAbout/>
        <Figaro/>
        <Outlets/>
        <Reviews/>
    </>
  )
}
