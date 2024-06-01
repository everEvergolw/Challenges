import { DOMAIN } from "./config";

export const registerApi = async (bodyObject) =>
{

    // Data to be sent in the POST request (in JSON format)
 
    // POST request options
    const requestOptions = {
        method: 'POST',
        headers: { 
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObject)
    };

    
    try {

        const response =  await fetch(`${DOMAIN}/users`, requestOptions);

        

        if (response.ok) {

            return [response,'']  
        }

        if(response.status === 422){
            

          return ['','User already exists.']   

        }

        const errorMessage = await response.text();
        return ['', `Server side error: ${errorMessage}`]

      } catch (error) {

        return ['',`Server down: ${error}`]

      }


}





export const loginApi = async (bodyObject) =>
  {
  
      // Data to be sent in the POST request (in JSON format)
   
      // POST request options
      const requestOptions = {
          method: 'POST',
          headers: { 
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(bodyObject)
      };
  
      
      try {
  
          const response =  await fetch(`${DOMAIN}/users/sign_in`, requestOptions);
  
          
  
          if (response.ok) {
  
  
              return [response,'']  
          }

          if(response.status === 422){
            

            return ['','Invalid email or password.']   

          }
  
          const errorMessage = await response.text();
          return ['', `Server side error: ${errorMessage}`]
  
        } catch (error) {
  
          return ['',`Server down: ${error}`]
  
        }
  
  
  }





export const logoutApi = async (jwtToken) =>
  {
  
      // Data to be sent in the POST request (in JSON format)
   
      // POST request options
      const requestOptions = {
          method: 'DELETE',
          headers: { 
          'Content-Type': 'application/json',
          'Authorization' : jwtToken
          }
      };
  
      
      try {
  
          const response =  await fetch(`${DOMAIN}/users/sign_out`, requestOptions);
  
          
  
          if (response.ok) {
  
  
              return [response,'']  
          }

          if(response.status === 422){
            

            return ['','Invalid email or password.']   

          }
  
          const errorMessage = await response.text();
          return ['', `Server side error: ${errorMessage}`]
  
        } catch (error) {
  
          return ['',`Server down: ${error}`]
  
        }
  
  
  }

  