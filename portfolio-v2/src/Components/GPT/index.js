import React, { useState, useRef } from 'react'
import './index.scss'
import {faPaperPlane, faRobot, faAngleDown, faCircleDot, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faOpenai } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function GPT() {
    const [state, setState] = useState("closed")
    const [chatStarted, setChatStarted] = useState(false)
    const [currentChat, setCurrentChat] = useState([])
    const ref = useRef(null)
    
    function injectPrompt(text){
        if(ref.current){
            ref.current.value = text;
            ref.current.focus();
        }
    }
    function sendMessage(){
        console.log(currentChat.length)
        const text = ref.current?.value.trim();
        if (!text) return; 
        setCurrentChat(prev=>[...prev,{sender:"user",text:text}])
        ref.current.value = "";

        setTimeout(() => {
            setCurrentChat(prev => [
                ...prev,
                { sender: "system", text: "This is a placeholder reply." }
            ]);
        }, 1000);
    }

    return (

    state ==="closed"?(
        <div className='but'>
        <button onClick={()=>{setState("opened")}} className='gpt-button'><FontAwesomeIcon icon={faOpenai} color='white' fontSize={"20px"}/></button>
        </div>
    ):(
        <div className='chatBox'>
            <div className='text'>
                <div className='head'>
                <FontAwesomeIcon icon={faCircleDot} fontSize={"9px"} color='lightgreen'/>
                <h1 className='chatbox-header-text'>Saad Support</h1>
                </div>
                 <button onClick={()=>{setState("closed")}} className='minimize'>
                    <FontAwesomeIcon icon={faAngleDown} color='white' fontSize={"15px"}/>
                </button>
               {chatStarted && <button onClick={()=>{
                    setCurrentChat([])
                    setChatStarted(false)
                }} className='clear'>
                    <FontAwesomeIcon icon={faTrash} color='white' fontSize={"15px"}/>
                </button>}
                
                {chatStarted===false ? 
                (
                <div className='intro'>
                   <FontAwesomeIcon icon={faRobot} fontSize={"22px"}/>
                   <h1 >Welcome to my Live Support</h1>
                   <p>Feel free to ask me about Saad, however kindly be aware that each user can ask up to 10 questions</p>
                   <p style={{marginTop:"10px"}}>Try asking: </p>
                   <div className='prompts'>
                    <button className='promptBox' onClick={()=>injectPrompt("What Technologies does Saad use?")}>What Technologies does Saad use?</button>
                    <button className='promptBox' onClick={()=>injectPrompt("What experience does Saad have?")}>What experience does Saad have?</button>
                    <button className='promptBox' onClick={()=>injectPrompt("Where does Saad currently work")}>Where does Saad currently work</button>
                   </div>
                   
                </div>
                )
                :
                (
                    <div className='messages'>
                        {currentChat.map((msg, i) => (
                            <p 
                                key={i} 
                                className={msg.sender === "user" ? "message-user" : "message-system"}
                                >
                                {msg.text}
                            </p>
                        ))}
                    </div>
                )}
                
               
            </div>
            <div className='bottom'>
                
            <input type='text' className='input' placeholder='Type here' ref={ref}></input>
            <button  className='Send' onClick={()=>{
                const text = ref.current?.value.trim()
                if(currentChat.length<1 && text){
                    setChatStarted(true)
                }
                sendMessage()
            }}> <FontAwesomeIcon icon={faPaperPlane} color='white'/> </button>
            
            </div>
        </div>
    )
)
}
export default GPT