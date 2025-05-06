import React, {useContext} from 'react'
import "./App.css"
import ai from "./assets/ai.png"
import { CiMicrophoneOn } from "react-icons/ci"
import { datacontext } from './context/UserContext'
import speak from './assets/speak.gif'
import aigif from './assets/aiVoice.gif'

function App() {
  let {recognition,speaking,setSpeaking,prompt,setPrompt,response}=useContext(datacontext)

  return (
    <div className='main'>
      <img src={ai} alt="" id="sifra"/>
      <span>I'm Sifra , your advanced virtual assistant</span>
      {!speaking?
      <button onClick={()=>{
        setPrompt("Listening...")
        setSpeaking(true)
        recognition.start()
      }}>Click Here <CiMicrophoneOn/> </button>
      
      :
      <div className='response'>
        {!response? <img src={speak} alt="" id="speak"/> :
        <img src={aigif} alt="" id="ai"/>
        }
        <p>{prompt}</p>
      </div>
    
    }
    </div>
  )
}

export default App
