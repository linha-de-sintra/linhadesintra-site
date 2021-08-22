import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function play() {
  var audio = new Audio('./hino2.0.m4a');
  audio.play();
}
export default function Home() {
  return (
    <div> <figure>
    <figcaption>A Portuguesa - Hino Nacional Português</figcaption>
    <audio
        autoPlay
        loop
        src="./hino2.0.m4a">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
    <Image src="/bandeira_3.png" alt="bandeira da tropa" width={3840} height={2160} />
</div>

  )
}