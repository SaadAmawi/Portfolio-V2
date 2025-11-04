import React, { useState, useRef, useEffect } from 'react'
import './index.css'
import {faPaperPlane, faAngleDown, faCircleDot, faTrash } from '@fortawesome/free-solid-svg-icons'
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
    const [msgCount, setMsgCount] = useState(0)
    const ref = useRef(null)
    const messagesRef = useRef(null)

    useEffect(() => {
    if (state === "opened" && ref.current) {
        ref.current.focus();
    }
}, [state]);

    const notify = () =>{
        toast("You have ran out of message!")
    }
    
    function injectPrompt(text){
        if(ref.current){
            ref.current.value = text;
            ref.current.focus();
        }
    }
async function sendMessage() {
    try {
        setMsgCount(prev => prev + 1);
        console.log(currentChat.length);

        const text = ref.current?.value.trim();
        if (!text) return;

        setCurrentChat(prev => [...prev, { "role": "user", "content": text }]);
        ref.current.value = "";
        setLoading(true);

        setTimeout(() => {
            if (messagesRef.current) {
                messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
            }
        }, 0);

        const conversationHistory = [...currentChat, { role: "user", content: text }];
        const payload = { messages: conversationHistory };

        console.log(payload);

        const response = await axios.post(
            "https://saadamawi.up.railway.app/gpt/",
            payload,
            { headers: { "Content-Type": "application/json" } }
        );

        // ✅ Check if the response has valid data before setting it
        if (response && response.data && response.data.response) {
            setCurrentChat(prev => [
                ...prev,
                { "role": "assistant", "content": response.data.response }
            ]);
        } else {
            setCurrentChat(prev => [
                ...prev,
                { "role": "assistant", "content": "Sorry, no response data received." }
            ]);
        }

    } catch (error) {
        console.error("Error fetching GPT response:", error);
        const errorMessage = error.response?.data?.detail || error.message || "An unknown error occurred.";
        setCurrentChat(prev => [
            ...prev,
            { "role": "assistant", "content": `Sorry,\n${errorMessage}` }
        ]);
    } finally {
        setLoading(false);
    }
}

    return (

    state ==="closed"?(
        <div className='but'>
        <button onClick={()=>{setState("opened")}} className='gpt-button'><FontAwesomeIcon  className="icons" icon={faOpenai} color='white' fontSize={"20px"}/></button>
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
                <FontAwesomeIcon icon={faCircleDot} className='pulse' fontSize={"9px"} color='lightgreen'/>
                <h1 className='chatbox-header-text'>Saad Support</h1>
                </div>
                 <button onClick={()=>{setState("closed")}} className='minimize'>
                    <FontAwesomeIcon icon={faAngleDown} className="icons" color='white' fontSize={"15px"}/>
                </button>
                <h1 className='msgCount'>Message Count: {msgCount}/10</h1>
               {chatStarted && <button onClick={()=>{
                    setCurrentChat([])
                    setChatStarted(false)
                }} className='clear'>
                    <FontAwesomeIcon icon={faTrash} className="icons" fontSize={"15px"}/>
                </button>}
                
                {chatStarted===false ? 
                (
                <div className='intro'>
                   <FontAwesomeIcon className="icons" icon={faOpenai} fontSize={"22px"}/>
                   <h1 >Welcome to my Live Support</h1>
                   <p>Feel free to ask me about Saad, however kindly be aware that each user can ask up to 10 questions per hour</p>
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
                                className={msg.role === "user" ? "message-user" : "message-system"}
                                >
                                {msg.content}
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
                }else if (msgCount>=10){
                    notify()
                }else if(currentChat.length>1 && msgCount<10){
                sendMessage()
                }
                    }}}  
                    ref={ref}
                    >
            </input>
            <button  className='Send' onClick={()=>{
                const text = ref.current?.value.trim()
                if(!text){return}
                if(currentChat.length<1 && text){
                    setChatStarted(true)
                    sendMessage()
                }else if (msgCount>=10){
                    notify()
                }else if(currentChat.length>1 && msgCount<10){
                sendMessage()
                }
            }}> <FontAwesomeIcon className="icons" icon={faPaperPlane} color='white'/> </button>
            
            </div>
        </div>
    )
)
}
export default GPT