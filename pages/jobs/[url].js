import { useState,useEffect } from "react";
import Head from "next/head";
import Link from 'next/link';
import { db } from "@/settings/firebase/firebase.setup";
import { getDocs,doc,collection,query,where } from "firebase/firestore";
import { AiOutlineClose} from 'react-icons/ai';
// import { BsDot} from 'react-icons/bs';
import Image from 'next/image';


export async function getStaticPaths() {
    const onSnap = await getDocs(collection(db,'job'));
    const paths = onSnap.docs.map(document => {
        return {
            params:{
                url:String(document.data().url)
            },
        }
    })

    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps(context) {
    const pageUrl = context.params.url;

    const job1 = [];
    const q = query(collection(db,'job'),where('url','==',pageUrl));
    const onSnap = await getDocs(q);
    onSnap.docs.forEach(document => job1.push(document.data()));

    return {
        props:{
            jobData:job1[0]
        }
    }
}

export default function Job({jobData}) {
    const [screenHeight,setScreenHeight] = useState(0);

    useEffect(() => {
        setScreenHeight(window.innerHeight - 60);
    },[]);

    return (
        <>
      <Head>
            <title>Dashboard | Company</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/realfast_logo.png" />
        </Head>

        
        <main className='grid grid-cols-5 items-center gap-9 px-40 h-screen  w-full '>
            {/* <div class="col-span-2"></div>
             <div class="col-span-2"></div>
            <div class="col-span-2"></div>
            <div class="col-span-2..."></div>
            <div class="col-span-12 ..."></div> */}
               
                    <div className='border border-gray-200 rounded-md absolute right-0 top-0 w-96 mr-48 mt-24'>
                 <AiOutlineClose className='text-gray-800 absolute mr-0 pl-0 pr-0 top-0 right-0 z-10 w-5 h-5' onClick={() => setShowMobileNav(true)}
           />
                                             
                        <div className="pl-3 space-y-2">
                        <h3 className='text-2xl text-gray-800 font-reading pt-11 font-bold'>UI/UX Designer</h3>
                        <p className=' text-gray-800'>Remote Webnet Dynamics Limited</p>
                        <p className=' text-gray-800'>Abuja</p>
                        <p className=' text-gray-800 '>₦100,000 - ₦150,000 a month</p>
                        <p className=' text-gray-800 pb-6 '>Responded to 51-74% of applications in the past 30 days, typically within 10 days.</p>
                        <Link href="#" className='h-48 bg-indigo-800 text-white font-bold px-11 py-3 rounded-md cursor-pointer'>Apply now</Link>
                        </div>
                        
                        <div>
                        <div className='border-t border-gray-300 mt-6 pt-2 overflow-y-scroll h-96 drop-shadow-4xl'>
                        <div className="pl-3 space-y-2">
                        <h1 className='text-gray-800 font-bold text-2xl'>Job details</h1>
                        <p>No matching job preferences</p>
                        <h1 className='text-gray-800'><Image className="inline mr-3" width={18} height={18} src='/images/salary.png' alt='salary'/>Salary</h1>
                        <h1 className='text-gray-800 bg-gray-200 rounded-md w-64 text-center'>₦100,000 - ₦150,000 a month</h1>
                        <h1 className='text-gray-800'><Image className="inline mr-3" width={18} height={18} src='/images/job type.png' alt='salary'/>Job Type</h1>
                        <h1 className='text-gray-800'><span className='bg-gray-200 rounded-md w-24 text-center'>Full-time</span> <span className='bg-gray-200 rounded-md w-24 text-center'>Permanent</span></h1>
                        </div>
                        <div className='border-t border-gray-300  pt-2 drop-shadow-4xl'></div>
                        
                        <li className="pl-3 text-gray-800">Investigating user experience design requirements for our suite of digital assets.</li>
                        <li className="pl-3 text-gray-800">Developing and conceptualizing a comprehensive UI/UX design strategy for the brand.</li>
                        <li className="pl-3 text-gray-800">Producing high-quality UX design solutions through wireframes, visual and graphic designs, flow diagrams, storyboards, site maps, and prototypes.</li>
                        <li className="pl-3 text-gray-800">Designing UI elements and tools such as navigation menus, search boxes, tabs, and widgets for our digital assets.</li>
                        <li className="pl-3 text-gray-800">Testing UI elements such as CTAs, banners, page layouts, page designs, page flows, and target links for landing pages.</li>
                        <li className="pl-3 text-gray-800">Collaborating with the marketing team, and internal and external designers to ensure the creation and delivery of tailored experiences for the digital user.</li>
                        <li className="pl-3 text-gray-800">Providing advice and guidance on the implementation of UX research methodologies and testing activities in order to analyze and predict user behavior.</li>
                        <li className="pl-3 text-gray-800">Adhering to style standards on typography and graphic design.</li>
                        
                        <h2 className="pl-3 font-bold text-gray-800 mt-5 mb-5">Requirements and skills</h2>
                        
                            <li className="pl-3 text-gray-800">Proven UI experience</li>
                            <li className="pl-3 text-gray-800">Demonstrable UI design skills with a strong portfolio</li>
                            <li className="pl-3 text-gray-800">Solid experience in creating wireframes, storyboards, user flows, process flows and site maps</li>
                            <li className="pl-3 text-gray-800">Proficiency in Photoshop, Illustrator, Figma, or other visual design and wire-framing tools</li>
                            <li className="pl-3 text-gray-800">Proficiency in HTML, CSS, and JavaScript for rapid prototyping.</li>
                            <li className="pl-3 text-gray-800">Excellent visual design skills with sensitivity to user-system interaction</li>
                            <li className="pl-3 text-gray-800">Ability to present your designs and sell your solutions to various stakeholders.</li>
                            <li className="pl-3 text-gray-800">Ability to solve problems creatively and effectively</li>
                            <li className="pl-3 text-gray-800">Up-to-date with the latest UI trends, techniques, and technologies</li>
                            <li className="pl-3 text-gray-800">BS in Computer science or any related course</li>
                            <li className="pl-3 text-gray-800">Multi-tasking and time-management skills, with the ability to prioritize tasks.</li>
                            
                        <p className="pl-3 text-gray-800">Job Type: Full-time</p>
                        <p className="pl-3 text-gray-800">Salary: ₦100,000.00 - ₦150,000.00 per month</p>
                        <p className="pl-3 text-gray-800">Education:</p>
                        <li className="pl-3 text-gray-800">Undergraduate (Preferred)</li>
                        <p className="pl-3 text-gray-800 mb-6">Expected Start Date: 06/02/2023</p>
                        
                        <Link href="#" className='h-48 bg-gray-500 text-gray-800 font-bold ml-3 px-11 py-3 mb-11 rounded-md cursor-pointer mt-9'>Report job</Link>            
                        </div>

                        </div>
                        </div>
        </main>
        </>
    )
}

const styles = {
    container:'w-full flex flex-col justify-center items-center px-16',
}