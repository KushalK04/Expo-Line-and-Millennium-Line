import dynamic from "next/dynamic"
import Head from 'next/head'
import Image from 'next/image'

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false});

export default function Home() {
  return (
    <div>
    <Head>
      <title>Map Leaflet Exercise 1</title>
      <link rel="icon" href="/mapfavicon.png" />
    </Head>
    
    <main>
      <DynamicMap />
    </main>
  </div>
  )
}