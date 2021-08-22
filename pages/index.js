import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div> 
    <Image src="/bandeira_3.png" alt="bandeira da tropa" width={3840} height={2160} />
    <figure>
    <audio
        autoPlay
        controls
        loop
        src="./hino2.0.m4a">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
</div>

  )
}