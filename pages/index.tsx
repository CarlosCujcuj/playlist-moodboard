import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Albums from '../Components/Albums/albums'
import ArtistsMain from '../Components/Artists/ArtistsMain'
import Description from '../Components/Description/Description'
import useWindowDimensions from './../hooks/useWindowDimensions'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { width: windowWidth, height: windowHeight } = useWindowDimensions()

  return (
    <>
      <Head>
        <title>Playlist Moodboard</title>
        <meta name="description" content="Playlist Moodboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Albums/>
        <ArtistsMain windowWidth={windowWidth}/>
      </main>
    </>
  )
}
