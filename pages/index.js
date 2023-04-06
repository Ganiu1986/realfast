import Head from 'next/head';
import MainNav from '@/component/MainNav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Your Dream Job | Real Fast</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/realfast_logo.png" />
      </Head>
      <main>
        <MainNav/>
        
      </main>
    </>
  )
}

