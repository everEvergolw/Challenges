import { useLocation } from "react-router-dom"
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import {getChallengeById } from "../apis/challenges";
import RichTextViewer from'../elements/RichTextViewer.jsx'

const Challenge = () =>{
    const location = useLocation()

    const [cookies] = useCookies(['jwt']);
    const [challenge, setChallenge] = useState('')


    useEffect(() => {
        const  segments = location.pathname.split("/")        
        const challengeId = segments[segments.length - 1] 
        getChallengeByIdApi(challengeId)

    },[])  
   

    const getChallengeByIdApi = async (id) =>{
        
        const[response, error] =  await getChallengeById(
            cookies.jwt,id)

        handleResponse([response, error])

    }
    
   

    const handleResponse = async ([response,error]) =>{


        if(error){

        }
        else{
            
            //TODO: show toast

            const data = await response.json()
            setChallenge(data.data)


        }

    }




    return(
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12 space-y-10"> 

        {challenge && 
        
            <div>

                <h1 className="text-3xl text-black">  {challenge.title}

                </h1>

                <RichTextViewer  content = {challenge.description} />



            </div>
        }

    </div>)

}

export default Challenge