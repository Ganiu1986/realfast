import {useState,useEffect} from 'react'
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function PagNotFound () {
    const [screenHeight,setScreenHeight] = useState(0);

    useEffect(() => {
      setScreenHeight(window.innerHeight - 60);
    },[])
    return (
        <>
      <Head>
        <title>Get Your Dream Job | Real Fast</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/realfast_logo.png" />
      </Head>
      <main className={styles.container} style={{height:`${screenHeight}px`}}>
        <Image width={200} height={200} src='/images/broken_plug.jpg2.avif'/>
        <h3 className={styles.message}>Sorry, the page you requested for does not exist</h3>
        <p className={styles.action}>Return to <Link href = '/about-us?keyword=react&jobtype=fulltime'>Home</Link></p>
      </main>
      </>
    )

}

const styles = {
    container:'flex flex-col justify-center items-center px-16',
    message:'text-lg my-3',
    action:'text-md',
    link:'text-indigo-500'
}