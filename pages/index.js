import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div> 
    <Image src="/bandeira_3.png" alt="bandeira da tropa" width={1920} height={1080} />
    <figure>
    <audio
        autoPlay
        loop
        src="./hino2.0.m4a">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
</div>

  )
}