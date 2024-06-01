import { useCookies } from 'react-cookie';
import { logoutApi } from '../apis/authentication';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () =>{

    const [cookies, setCookie,removeCookie] = useCookies([])
    const [jwt, setJwt] = useState(cookies.jwt)
    
    const navigate = useNavigate()


    const handleLogout = async (e) =>{

        const[response, error] =  await logoutApi(cookies.jwt)
        
        handleResponse([response,error])
    
    }

    const handleLogin =  (e) =>{

        navigate('/login')
     
    
    }







    const handleResponse = async ([response,error]) =>{


        if(error){
            removeCookie('jwt');
        }

        else{
            
            removeCookie('jwt');

        }

        setJwt(null)

    }


    return (
        
        <div className="bg-white  shadow ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="flex justify-between items-center">
          

            <p className="font-bold text-2xl">

                code challenges

            </p>

            <div>
                {jwt ?
                    <button onClick={handleLogout} className="bg-indigo-500 rounded px-3 py-1.5 my-4">
                        Logout
                    </button>
                :
                    <button onClick={handleLogin} className="bg-indigo-500 rounded px-3 py-1.5 my-4">
                        Login
                    </button>
                }
           


            </div>
        
           
            </div>
        </div>
        </div>

    )



}

export default Navbar