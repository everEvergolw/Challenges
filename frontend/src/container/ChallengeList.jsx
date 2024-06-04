
import 'react-quill/dist/quill.snow.css';
import {getActiveAndUpcomingChallenges } from "../apis/challenges";
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';





const ChallengeList = () =>{

    

    const [cookies] = useCookies(['jwt']);
    const [activeChallenges, setActiveChallenges] = useState('')
    const [uocomingChallenges, setUpcomingChallenges] = useState('')

 
    useEffect(() => {

        getActiveAndUpcomingChallengesApi(cookies.jwt)

    },[])

   

    const getActiveAndUpcomingChallengesApi = async () =>{
        
        const[response, error] =  await getActiveAndUpcomingChallenges(
            cookies.jwt)

        handleResponse([response, error])

    }
    
   

    const handleResponse = async ([response,error]) =>{


        if(error){

        }
        else{
            
            //TODO: show toast

            const data = await response.json()
            setActiveChallenges(data.active)
            setUpcomingChallenges(data.upcoming)

        }

    }


    return(  
    
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12 "> 



           <h1 className="text-4xl"> 
            
            
                Challenges active: {activeChallenges.length} upcoming :{uocomingChallenges.length}
                </h1>     


      
    


    </div>)





}


export default ChallengeList