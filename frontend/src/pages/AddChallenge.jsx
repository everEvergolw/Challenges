import { useState } from "react"
import Button from "../elements/Button"
import Datepicker from "react-tailwindcss-datepicker"; 




const AddChallenge = () =>{

    const [title, setTitle] = useState('')

    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null 
        })

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
        } 

    const handleSubmit = (e) =>{
        e.preventDefault()


    }

    const handleTitleChange = (e) =>{
        setTitle(e.target.value)


    }

    return(  
    
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12 "> 



           <h1 className="text-4xl"> 
            
            
                Add Challenge
                </h1>     


           <form  onSubmit="handleSubmit"  className='mt-10 flex flex-col gap-8'> 

            <input 
                name="title"
                type="title"

                className='py-2  w-full border  border-gray-600 rounded px-3'
                value = {title}
                placeholder="Challenge title"


                onChange={handleTitleChange}



            />

                <Datepicker 
                    minDate={new Date()}
                    placeholder="Start Date ~ End Date"
                    inputClassName="border  border-gray-600 rounded px-3 py-2 w-full"
                    value={value} 
                    displayFormat={"DD MMMM"}
                    onChange={handleValueChange} 
                    /> 
            




           <Button 
                    type = "submit">

                    Add Challenge

                    </Button>

            </form>
    
          


    </div>)





}

export default AddChallenge