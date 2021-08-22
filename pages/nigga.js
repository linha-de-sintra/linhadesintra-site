import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div> <audio controls autoplay>
    <source src="./hino2.0.m4a" type="audio/m4a">
    Your browser does not support the audio element.
  </source>
  </audio>
    <Image src="/bandeira_3.png" alt="bandeira da tropa" width={3840} height={2160} />
</div>

  )
}