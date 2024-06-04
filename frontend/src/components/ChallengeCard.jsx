import DefaultThumbnail from '../assets/auth_graphic.svg'
import { formatDate } from '../utlities/date'

const ChallengeCard = ({challenge}) =>{

    const startDate = new Date(challenge.start_date)  
    const endDate = new Date(challenge.end_date)   

    const currentDate =  new Date()


    const dateText = () => {

      

        if(startDate  > currentDate){
            // future challenge
            

            return(<p className='font-medium text-green-600'> {`Start Date: ${formatDate(startDate)}`} </p>)

        }
        else if(startDate < currentDate && endDate > currentDate)
        {
            // active challenge
            return(<p className='font-medium text-red-600'> {`End Date: ${formatDate(endDate)}`} </p>)



        }
        else{
            return(<p className='font-medium text-gray-600'> {`Start Date: ${formatDate(startDate)}/ End Date: ${formatDate(endDate)}`} </p>)

        }




    }



    return(
    
    
    <div className="flex flex-col border border-black rounded hover:cursor-pointer hover:shadow-lg ">
        <img className='aspect-square w-full border-b border-black' src={DefaultThumbnail}/>

        <div className='p-4 space-y-2'>

           <p className='font-medium '> {challenge.title} </p>
           {dateText()}

        </div>





        
    </div>)



}

export default ChallengeCard