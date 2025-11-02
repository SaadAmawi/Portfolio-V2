import React, { useState, useRef } from 'react'
import './index.scss'
import {faPaperPlane, faRobot, faAngleDown, faCircleDot, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faOpenai } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import loadingGIF from '../Assets/Images/loading.gif'
import { ToastContainer, toast } from 'react-toastify';

function GPT() {
    const [state, setState] = useState("closed")
    const [chatStarted, setChatStarted] = useState(false)
    const [currentChat, setCurrentChat] = useState([])
    const [loading,setLoading] = useState(false)
    const ref = useRef(null)
    const messagesRef = useRef(null)
    const notify = () =>{
        toast("You have ran out of message!")
    }
    
    function injectPrompt(text){
        if(ref.current){
            ref.current.value = text;
            ref.current.focus();
        }
    }
    async function sendMessage(){
        console.log(currentChat.length)
        const text = ref.current?.value.trim();
        if (!text) return; 
        setCurrentChat(prev=>[...prev,{sender:"user",text:text}])
        ref.current.value = "";
        var formData = new FormData();
        setTimeout(() => {
                if (messagesRef.current) {
                    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
                }
            }, 0);
        setLoading(true)
        formData.append("message", text);
        axios.post('http://127.0.0.1:8000/gpt/', formData)
        .then(response=>{
            setCurrentChat(prev=>[
                ...prev,
                {sender:"system", text: response.data.response}
                
            ]);setLoading(false);}).catch(error=>{
            console.error("Error fetching GPT response:", error.message);
            setCurrentChat(prev=>[
                ...prev,
                {sender:"system", text: "Sorry, it seems I have ran into an error, or ran out of tokens.\nPlease Try Again later, sorry for the inconvinience."}
            ])
        })

    }

    return (

    state ==="closed"?(
        <div className='but'>
        <button onClick={()=>{setState("opened")}} className='gpt-button'><FontAwesomeIcon icon={faOpenai} color='white' fontSize={"20px"}/></button>
        </div>
    ):(
        <div className='chatBox'>
            <ToastContainer 
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                className="toast"
                />
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
                    <div className='messages' ref={messagesRef}>
                        {currentChat.map((msg, i) => (
                            <p 
                                key={i} 
                                className={msg.sender === "user" ? "message-user" : "message-system"}
                                >
                                {msg.text}
                            </p>
                        ))}
                        {loading && 
                        <div className='loading'>
                        <img src={loadingGIF} alt='loading' className='loading-gif'/>
                            <p>Im thinking</p>
                        </div>}
                    </div>
                )}
                
               
            </div>
            <div className='bottom'>
                
            <input 
            type='text' 
            className='input' 
            placeholder='Type here' 
            onKeyDown={(e) => {
                if(e.key === "Enter"){
                    const text = ref.current?.value.trim()
                    if(currentChat.length<1 && text){
                    setChatStarted(true)
                    sendMessage()
                }else if (currentChat.length>20){
                    notify()
                }else if(currentChat.length>1 && currentChat.length<10){
                sendMessage()
                }
                    }}}  
                    ref={ref}
                    >
            </input>
            <button  className='Send' onClick={()=>{
                const text = ref.current?.value.trim()
                if(currentChat.length<1 && text){
                    setChatStarted(true)
                    sendMessage()
                }else if (currentChat.length>20){
                    notify()
                }else if(currentChat.length>1 && currentChat.length<10){
                sendMessage()
                }
            }}> <FontAwesomeIcon icon={faPaperPlane} color='white'/> </button>
            
            </div>
        </div>
    )
)
}
export default GPT