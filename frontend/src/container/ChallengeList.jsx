
import 'react-quill/dist/quill.snow.css';
import {getActiveAndUpcomingChallenges } from "../apis/challenges";
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import ChallengeCard from '../components/ChallengeCard';





const ChallengeList = () =>{

    

    const [cookies] = useCookies(['jwt']);
    const [activeChallenges, setActiveChallenges] = useState('')
    const [upcomingChallenges, setUpcomingChallenges] = useState('')

 
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
    
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12 space-y-20"> 

            {
                activeChallenges && activeChallenges.length > 0 &&
                <>
                
                <h3 className="text-2xl font-bold">Active Challenges</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-6'>
                    {activeChallenges.map((challenge)=>{

                        return <ChallengeCard key={challenge.id} challenge={challenge} />

                    })}

                </div>

         
                
                </>

            }

            {
                upcomingChallenges && upcomingChallenges.length > 0 &&
                <>
                
                <h3 className="text-2xl font-bold">Upcoming Challenges</h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-6'>
                    {upcomingChallenges.map((challenge)=>{
                        
                        return <ChallengeCard key={challenge.id} challenge={challenge} />

                    })}

                </div>
                
                </>

            }








           

      
    


    </div>)





}


export default ChallengeList