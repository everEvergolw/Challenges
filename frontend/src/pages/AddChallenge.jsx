import { useState } from "react"
import Button from "../elements/Button"
import Datepicker from "react-tailwindcss-datepicker"; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "../components/EditorToolbar";

const initialErrorsState = {
    title :'',
    description : '',
    date : '',
    api : '',
    }
        


const AddChallenge = () =>{

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('') 
    const [errors, setErrors] = useState(initialErrorsState)

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

        let newErrors = {}

        if(title.length === 0){
            //Show error
            newErrors = {
                ...newErrors,
                title : 'Please enter title.'

            }
            
        }

        if(description.length === 0){

            //Show error
            newErrors = {
                ...newErrors,
                description : 'Please enter description.'

            }
         

        }

        if(value.startDate === null || value.endDate === null){

            //Show error
            newErrors = {
                ...newErrors,
                date : 'Please enter date.'

            }
         

        }


        
        setErrors(newErrors)

        const hasErrors = Object.values(newErrors).some(error => error !== '');
        if(hasErrors){
            return
        }
        //TODO: api call

    }

    const handleTitleChange = (e) =>{
        setTitle(e.target.value)


    }


    const handleDescriptionChange = (e) =>{
        setDescription(e)


    }

    return(  
    
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12 "> 



           <h1 className="text-4xl"> 
            
            
                Add Challenge
                </h1>     


           <form  className='mt-10 flex flex-col gap-8'> 


            <div>
            <input 
                name="title"
                type="title"

                className='py-2  w-full border  border-gray-600 rounded px-3'
                value = {title}
                placeholder="Challenge title"


                onChange={handleTitleChange}



            />
            
            {errors.title && <p className='text-sm text-medium text-red-500 mt-1'> {errors.title}  </p> }  
            </div>

            <div>

            <div className="text-editor">
                <EditorToolbar />
                <ReactQuill
                    theme="snow"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder={"Write something awesome..."}
                    modules={modules}
                    formats={formats}
                />
                </div>
                
                {errors.description && <p className='text-sm text-medium text-red-500 mt-1'> {errors.description}  </p> }  
                </div>
                
                <div>
                <Datepicker 
                    minDate={new Date()}
                    placeholder="Start Date ~ End Date"
                    inputClassName="border  border-gray-600 rounded px-3 py-2 w-full"
                    value={value} 
                    displayFormat={"DD MMMM"}
                    onChange={handleValueChange} 
                    /> 

                {errors.date && <p className='text-sm text-medium text-red-500 mt-1'> {errors.date}  </p> }  
                </div>




            <div>
           <Button 
                    onClick={handleSubmit}>

                    Add Challenge

                    </Button>
            {errors.api && <p className='text-sm text-medium text-red-500 mt-1'> {errors.api}  </p> }  

            </div>


            </form>

    
          


    </div>)





}

export default AddChallenge