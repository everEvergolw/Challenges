import { BASE_API } from "./config";

export const addChallenge = async (jwtToken, bodyObject) =>
{

    // Data to be sent in the POST request (in JSON format)
 
    // POST request options
    const requestOptions = {
        method: 'POST',
        headers: { 
        'Content-Type': 'application/json',
        'Authorization' : jwtToken
        },
        body: JSON.stringify(bodyObject)
    };

    
    try {

        const response =  await fetch(`${BASE_API}/challenges`, requestOptions);

        

        if (response.ok) {

            return [response,'']  
        }

        if(response.status === 422){
            

          return ['','Unauthorized user. Cannot add challenge']   

        }

        const errorMessage = await response.text();
        return ['', `Server side error: ${errorMessage}`]

      } catch (error) {

        return ['',`Server down: ${error}`]

      }


}



export const getActiveAndUpcomingChallenges = async (jwtToken, bodyObject) =>
  {
  
      // Data to be sent in the POST request (in JSON format)
   
      // POST request options
      const requestOptions = {
          method: 'GET',
          headers: { 
          'Content-Type': 'application/json',
          'Authorization' : jwtToken
          },
      };
  
      
      try {
  
          const response =  await fetch(`${BASE_API}/challenges/active_and_upcoming`, requestOptions);
  
          
  
          if (response.ok) {
  
              return [response,'']  
          }
  
          if(response.status === 422){
              
  
            return ['','Unauthorized user. Cannot add challenge']   
  
          }
  
          const errorMessage = await response.text();
          return ['', `Server side error: ${errorMessage}`]
  
        } catch (error) {
  
          return ['',`Server down: ${error}`]
  
        }
  
  
  }
  