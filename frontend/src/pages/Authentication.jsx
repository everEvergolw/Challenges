import PropTypes from 'prop-types'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { validateEmail,validatePassword } from '../utlities/validations'
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';


import { registerApi,loginApi } from '../apis/authentication';

const initialErrorsState = {
    email :'',
    password : '',
    api : '',
}

const Authentication = ({pageType}) =>{
    const [cookies, setCookie] = useCookies(['jwt']);

    const navigate = useNavigate() 

 
    useEffect(() =>{

        if(cookies.jwt){

            navigate('/')
        }
    


    }, [])

    const [email,setEmail] = useState('')

    const [errors, setErrors] = useState(initialErrorsState)

    const [password,setPassword] = useState('')


    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) =>{
            e.preventDefault();

            let newErrors = {}

            if(!validateEmail(email)){
                //Show error
                newErrors = {
                    ...newErrors,
                    email : 'Invalid email.'

                }
                
            }

            if(!validatePassword(password)){

                //Show error
                newErrors = {
                    ...newErrors,
                    password : 'Password should be at least 6 characters long.'

                }
             

            }
            
            setErrors(newErrors)

            const hasErrors = Object.values(newErrors).some(error => error !== '');
            if(hasErrors){
                return
            }
            
            //make API call 
            
            if(pageType === PageType.LOGIN){
                // Login APi call
                const[response, error] =  await loginApi({
                    
                    user: {
                        email: email,
                        password: password 
                    }

                })
                
                handleResponse([response,error])

            }
            else{

                const[response, error] =  await registerApi({
                    
                    user: {
                        email: email,
                        password: password 
                    }

                })
                
                handleResponse([response,error])
           


            }
    }

    const handleResponse = async ([response,error]) =>{


        if(error){
            setErrors({
                ...errors,
                api: error
        })
        }
        else{
            
            const jwt = response.headers.get('Authorization')
            const result =  await response.json();

            const message = result.message 
            const user = result.data
            setCookie('jwt', jwt, {
                path: '/',
                sameSite: 'none', // Required for third-party contexts
                secure: true,    // Required if sameSite='none'
                maxAge: 3600     // Optional: set cookie expiration as needed
            });            
            // TODO: Navigate to home page 

            navigate('/')

        }

    }



    return(<>
    
          
    <div className="bg-white ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12 "> 

                <h3 className="text-2xl font-bold">
                    {(pageType ===PageType.LOGIN) ? 'Login' : 'Register' }      
                </h3>

               { (pageType ===PageType.LOGIN) ?
               
               <p className='mt-4'> Not a user? 
                    <Link 
                    
                    to='/register'
                    className='ms-1 underline'
                    >

                     Register
                    </Link>
                     </p>

                :
                
                <p className='mt-4'> Already a user? 

                <Link 
                
                to='/login'
                className='ms-1 underline'
                >

                 Login
                </Link>
                 </p>

                    }

                <form onSubmit={handleSubmit} className='mt-10 max-w-96 flex flex-col gap-8'> 


                    <div>

                        <input 
                            name='email'
                            type='email'
                            className='py-2  w-full border border-gray-600 rounded px-3'
                            placeholder='Enter email'
                            value={email}
                            onChange={handleEmailChange}
                        />

                      {errors.email && <p className='text-sm text-medium text-red-500 mt-1'> {errors.email}  </p> }  

                    </div>



                    <div>

                        <input 
                            name='password'
                            type='password'
                            className='py-2  w-full border  border-gray-600 rounded px-3'
                            placeholder='Enter password'
                            value={password}
                            onChange={handlePasswordChange}
                            />


                      {errors.password && <p className='text-sm text-medium text-red-500 mt-1'> {errors.password}  </p> }  

                    </div>


                  
                    <button 
                        type='submit'
                        className='bg-indigo-500 hover:bg-indigo-600 px-3 py-2 rounded text-white'>

                        {(pageType ===PageType.LOGIN) ? 'Login' : 'Register' }      


                    </button>

                    {errors.api && <p className='text-sm text-medium text-red-500 mt-1'> {errors.api}  </p> }  


                </form>


            </div>
        </div>
    
    
    
    

    </>)



}

export const PageType = Object.freeze({
    LOGIN : 0,
    REGISTER : 1

})


Authentication.propTypes = {
    pageType: PropTypes.number.isRequired
}


export default Authentication