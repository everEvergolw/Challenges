
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Features from "./container/Features"
import ChallengeList from "./container/ChallengeList"
import { Route,Routes } from "react-router-dom"
import Challenge from './pages/Challenge'

function App() {

  return (
    <>
    {/*
      Navbar
      Hero
      Challenge List
      Features
      Footer
    
    */}
    
        <Navbar/>

      

        <Routes>


          <Route path="/challenge/:id" element=
                    { 
                        <Challenge/>

                    }>
                    </Route>

            <Route path="/" element=
            { <>
                <ChallengeList/>
                <Features/> 
            
            </>

            }>
            </Route>



              



        </Routes>


      <Footer/>

    </>
  )
}

export default App
