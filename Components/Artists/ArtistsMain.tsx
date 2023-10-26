import { useEffect, useState } from 'react'
import style from './ArtistsMain.module.css'
import Image from 'next/image'
import { ArtistCard, ArtistMain } from './types'
 
const Artists = [
  {
    name: 'Céu',
    description: 'Brazilian singer-songwriter which name (Céu) means "sky" and "heaven" in Portuguese. Presents her music with an alluring and organic fusion of bossa nova, R&B, and Brazilian pop.',
    image: 'ceu.jpg'
  },
  {
    name: 'Luna',
    description: 'Ukrainian indie pop singer-songwriter. Her music was praised by critics for the combination of electronic music with a melancholy mood, and also for references to \'90s pop culture.',
    image: 'luna.jpg'
  },
  {
    name: 'Deftones',
    description: 'American alternative metal band formed in California, 1988. Deftones is known as one of the most experimental groups to have come from the alternative metal music scene.',
    image: 'deftones.jpg'
  },
  {
    name: 'Daft Punk',
    description: 'French electronic music duo formed in 1993 in Paris.  They achieved popularity in the late 1990s as part of the French house movement.',
    image: 'daft-punk.jpg'
  },
  {
    name: 'Joy division',
    description: 'English rock band formed in Salford, 1976. Refined the external chaos of 1970s punk into a disquieting inner turmoil, ushering in the postpunk era. ',
    image: 'joy-division.jpeg'
  },
  {
    name: 'Adorável Clichê',
    description: 'Shoegaze/dream pop band from Blumenau, Brazil. Formed in 2013, heavily influenced by the likes of Sonic Youth, Nirvana, Yuck, Soda Café and Explosions In The Sky.',
    image: 'adoravel-cliche.jpeg'
  },
  {
    name: 'Parkway Drive',
    description: 'Australian metalcore band from Wales. The band has released seven studio albums, most of them influenced by metalcore and heavy metal',
    image: 'parkway-drive.png'
  },
  {
    name: 'Arcade Fire',
    description: ' Eclectic indie rock band with baroque and pop undertones. They are known for their almost orchestral instrumentation, serious lyrical, and dramatic build-ups to moments of catharsis.',
    image: 'arcade-fire.jpeg'
  },
]

const ArtistCard = ({ artistName, description, img } : ArtistCard) => {
  return (
    <div className={style.card}>
      <div className={style.imageWrapper}>
        {<Image 
          src={`/images/${img}`}
          objectFit='cover'
          layout='fill'
          alt='artist-img'
        />}
      </div>
      <div className={style.descriptionWrapper}>
        <p className={style.artistName}>{artistName}</p>
        <p className={style.artistDescription}>{description}</p>
      </div>
    </div>
  )
}

const ArtistsMain = ({ windowWidth }: ArtistMain) => {

  const [artists, setArtists] = useState(Artists)

  useEffect(() => {
    if (windowWidth <= 576 && artists && artists.length > 4) {
      setArtists(Artists.slice(0, 4))
    } else {
      setArtists(Artists)
    }
  }, [windowWidth, artists])

  return (
    <div className={style.wrapper}>
      <div className={style.titleWrapper}>
        <p className={style.title}>Artists</p>
      </div>
      <div className={style.cardsWrapper}>
        { artists.map((artist, index) => {
          return (
            <ArtistCard 
              key={index} 
              artistName={artist.name}
              description={artist.description}
              img={artist.image}
            />
          )
        }) }
      </div>
    </div>
  )
}

export default ArtistsMain