import Instagram from'../assets/instagram.svg'

import Github from'../assets/github.svg'
import Linkedin from'../assets/linkedin.svg'
import Youtube from'../assets/youtube.svg'



const Footer = () =>{

    return(   
        
    <div className="bg-white ">
    <div className="mx-auto max-w-7xl py-8 px-2 sm:px-6 lg:px-8 ">
        <div className="flex flex-col justify-between items-center gap-2"> 

        <div className='flex gap-3'>
            
            {/*TODO: Link external socials*/}
            <img className="w-6 h-6 " src={Instagram}/> 
            <img className="w-6 h-6 " src={Github}/> 
            <img className="w-6 h-6 " src={Youtube}/> 
            <img className="w-6 h-6 " src={Linkedin}/> 


        </div>
        
        <p className="mt-4 font-medium text-sm text-gray-600"> 

            @ 2024 Keycard Technologies Pvt. Ltd. All rights reserved. 

        </p>

        <p className="flex items-center gap-2 font-medium text-sm text-gray-600"> 

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg> 

        Developed by Jiahao Liu for the community. 

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 fill-red-500"> 
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>


        </p>

    
       
        </div>
    </div>
    </div>
    )

}

export default Footer 