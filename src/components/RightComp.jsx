import React, { useEffect, useState } from 'react'
import { GoogleGenAI } from "@google/genai";
import logo from "../assets/finAi.png"
import { useDispatch } from 'react-redux';
import { addResponse } from '../utils/ComposerSlice';



const RightComp = () => {
  const dispatch = useDispatch()
  const[userInput , setUserInput] = useState("")
  const[aiResponse, setAiResponse] = useState("")
  const[showLoader, setShowLoader] = useState(false)
  const[showText, setShowText] = useState(true)
  const[aiChat, setAiChat] = useState([])
  // console.log(aiChat)

const runAi = async () => {
    const ai = new GoogleGenAI({ apiKey: "AIzaSyCGhEOlMLHyK24uKAoA_SUjuz9Qs_-JJ0g" });
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `You are a professional customer support assistant.

          User asked: "${userInput}"

          Please reply politely and helpfully:

          1. Acknowledge the user's concern.
          2. If about refund, return, or order issue, ask for order ID or proof.
          3. Briefly explain relevant policies (e.g., refunds within 60 days).
          4. Summarize next steps (return product, contact support).
          5. Refer to knowledge base if helpful.
          6. Be concise, friendly, and solution-focused.
          7. Line should be (min 10 and max 15) moreImportant  give space after every line finish.
          Respond naturally and professionally.`,
      });
      // console.log(response.text);
      setAiChat((item) => [...item, {sender : "ai", text : response.text}])
      setAiResponse(response.text)
      setShowLoader(false)
    } catch (error) {
      console.error("AI generation failed:", error);
    }
  };



  return (
    <div className=' w-full border border-l-0 border-t-0 flex flex-col relative overflow-auto  bg-gradient-to-b from-[#f7f7fb] via-[#fafafa] to-[#fdf4f8]'>
      <div className="h-[8vh] items-center text-xl border p-4 flex border-l-0 border-r-0 justify-between ">
        <div className=' flex px-4 gap-5'>
        <button><i className="fa-solid fa-layer-group"></i> AI Copilot</button>
        <button>Details</button>
        </div>
        <i className="fa-solid fa-table-columns fa-rotate-270"></i>

      </div>


      {showText && <div className="flex flex-col items-center my-auto ">
        <img src={logo} alt="Fin Ai Logo" className='h-[5vh] m-3' />
        <h2 className='font-bold'>Hi, I'm Fin AI Copilot</h2>
        <h2>Ask me anything about this conversation.</h2>
      </div>}

      {/* {showLoader && <div class="text-center mt-[40vh]">
        <div role="status">
            <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    </div>} */}

    {/* {aiChat && <div>
      
      {aiChat.map((item) => {
        return <p>{item.text}</p>
      })}


      </div>} */}


<div className="flex flex-col p-4 space-y-2">
  {aiChat.map((item, index) => (
    <div
      key={index}
      className={`max-w-xs md:max-w-md p-3 rounded-xl text-sm flex flex-col ${
        item.sender === 'you'
          ? 'bg-blue-500 text-white self-end'
          : 'bg-gray-200 text-gray-900 self-start'
      }`}
    >
      <p>{item.text}</p>

      {item.sender === 'ai' && (
        <button
          className="mt-2 px-3 py-1 text-xs font-medium bg-white text-gray-800 border border-gray-300 rounded hover:bg-gray-100 transition"
          onClick={() => {
            dispatch(addResponse(aiResponse))
          }}
        >
          Add to Composer
        </button>
      )}
    </div>
  ))}
</div>






      <div className="flex border justify-between p-3 rounded-2xl bottom-0 absolute w-[28vw] m-4">
      <input value={userInput} onChange={(e) => {
        setUserInput(e.target.value)
      }} type="text" placeholder='Ask a question...' className='w-full outline-none border-none cursor-text' />
      <i onClick={() => {
        if(!userInput.length)
        {
          return
        }
        setAiChat((prev) => {
          return [...prev, {sender : "you", text : userInput}]
        })
        setShowLoader(true)
        setShowText(false)
        setUserInput("")
        runAi()

        console.log("OK")
      }} className="fa-solid fa-arrow-up" style={{color: "gray"}}></i>

      </div>
    </div>
  )
}

export default RightComp


