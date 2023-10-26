import Image from 'next/image';
import { useState, useEffect, useRef, useMemo } from "react"
import classes from './albums.module.css'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const AlbumPhotos = ['images/am.jpeg', 'images/blacktracle.jpeg', 'images/chamber.jpg']

const Albums = () => {
  const [albumCovers, setAlbumCovers] = useState([])
  const initialContainerElm = useRef<HTMLDivElement>(null)
  const [finalBoxShadow, setFinalBoxShadow] = useState<string>('0')
  const { width: windowWidth, height: windowHeight } = useWindowDimensions()

  useEffect(() => {

    const scrollProgress = () => {
      const containerHeight = initialContainerElm.current?.offsetHeight ?? 1
      const amountScrolled = containerHeight - windowHeight
      return window.scrollY / (amountScrolled)
    }

    window.addEventListener('scroll', () => {
      // Start Value -> 0.090
      // End Value ->  1 -> div exits screen
      const currentScrollProgress = scrollProgress()
      if (currentScrollProgress < 1) { // the div is already out of the portview
        // console.log('====triggered: ', currentScrollProgress)
        document.documentElement.style.setProperty('--scroll', `${currentScrollProgress}`)
      }
    })
  }, [windowHeight])

  /* useMemo(() => {
    const rings = 100

    const ringsValues: Array<number> = []
    let ringsStep = 0.5
    for (let i=0; i <= rings; i++) {
      ringsStep += 0.0625
      ringsValues.push(ringsStep)
    }
    // setRingsValues(values)

    const ringsColor: Array<string> = []
    for (let i=0; i <= rings/2; i++) {
      const alphaAmount = i % 4 === 2 ? 0.2 : 0.3
      ringsColor.push(
        'rgba(0, 0, 0, 0.5)',
        `rgba(255, 255, 255, ${alphaAmount})`
      )
    }

    let boxShadow = ''
    for (let i=0; i <= rings; i++) {
      boxShadow += `inset 0 0 0 ${ringsValues[i]}em ${ringsColor[i]}, `
    }
    boxShadow
    // console.log('==boxShadow: ', boxShadow)

    setFinalBoxShadow(boxShadow.slice(0, -2))

  }, []) */

  // console.log('==finalBoxShadow: ', finalBoxShadow)

  /* useEffect(() => {

  }, [windowWidth, windowHeight]) */
  
  return (
    <>
      <div className={classes['container']} ref={initialContainerElm}>
        <div>inicio</div>
        <div className={classes['left-side']}>
          
          <div className={classes['mainAlbumContainer']} >
            <img className={classes['mainAlbum2']} src={'images/mainAlbum.png'} alt='mainAlbum'/>
          </div>

          <Image className={classes['album5']} src={'/images/nadie.jpeg'} width={275} height={275} alt='album-cover'/>
          <Image className={classes['album1']} src={'/images/blacktracle.jpeg'} width={275} height={275} alt='album-cover'/>
          <Image className={classes['album2']} src={'/images/reflektor.jpeg'} width={275} height={275} alt='album-cover'/>
          <Image className={classes['album3']} src={'/images/sober.jpeg'} width={275} height={275} alt='album-cover'/>
          <Image className={classes['album4']} src={'/images/humanz.jpeg'} width={275} height={275} alt='album-cover'/>
          {/* <div style={{ width: '150px', height: '300px', backgroundColor: 'cadetblue'}}></div>
          <div style={{ width: '200px', height: '300px', backgroundColor: 'pink'}}></div> */}
          
        </div>
        <div className={classes['test']}><h1>test</h1></div>
      </div>
      <div className={classes['right-side']}>
        <h1>adios</h1>
      </div>
    </>
  )
}

export default Albums