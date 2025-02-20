import React, {useContext} from 'react'
import "./App.css"
import ai from "./assets/ai.png"
import { CiMicrophoneOn } from "react-icons/ci"
import { datacontext } from './context/UserContext'

function App() {
 // let {recognition,speaking,setSpeaking}=useContext(datacontext)

  return (
    <div className='main'>
      <img src={ai} alt="" id="sifra"/>
      <span>I'm Sifra , your advanced virtual assistant</span>
      
      <button onClick={()=>{
        setSpeaking(true)
        recognition.start()
      }}>Click Here <CiMicrophoneOn/> </button>
      
    </div>
  )
}

export default App
