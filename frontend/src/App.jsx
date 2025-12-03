import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FacialExpression from './Components/FacialExpression'
import MoodSongs from './Components/MoodSongs';


function App() {

   const [ Songs, setSongs ] = useState([
      
    ])


  return (
    <>
       <FacialExpression setSongs={setSongs}/>
       <MoodSongs  Songs={Songs} />
    </>
  )
}

export default App
