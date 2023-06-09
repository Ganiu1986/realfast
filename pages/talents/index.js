import { useState,useEffect,useContext } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]";


//create a validation schema (validation rules)

export default function Dashboard () {
    const [screenHeight,setScreenHeight] = useState(0);
    
    const { data:session} = useSession

    useEffect(() => {
        setScreenHeight(window.innerHeight - 60);
    },[]);

    

    return (
        <>
        <Head>
            <title>Dashboard | Talents</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/realfast_logo.png" />
        </Head>
        <main className={styles.container} style={{minHeight:`${screenHeight}px`}}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>You are signed in as { session?.user.email}</h2>

               
            </div>
        </main>
        </>
    )
}

export  async function getServerSideProps (context) {
    const session = await getServerSession(context.req,context.res,nextAuthOptions);
        
    //if there is an active session, redirect to talent dashboard
    if(session) {
        if(session.user.accountType !== 'talent') {
            return {
                redirect:{
                    destination:'/',
                    permanent:false,
                }
            }
        }
    } else {
        return {
            redirect:{
                destination:'/signin',
                permanent:false,
            }
        }
    }

    return {
        props:{
            session:JSON.parse(JSON.stringify(session))
        }
    }
}

const styles = {
    container:'w-full flex flex-col justify-center items-center px-16',
    wrapper:'w-full md:w-[720px] py-8',
    title:'text-xl text-center mb-4',
}

