import React, { useEffect, useState } from 'react'
import { GoogleGenAI } from "@google/genai";
import logo from "../assets/finAi.png"



const RightComp = () => {
const[userInput , setUserInput] = useState('How do I get a refund?')

useEffect(() => {
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
      console.log(response.text);
    } catch (error) {
      console.error("AI generation failed:", error);
    }
  };

  runAi();
}, []); 

  return (
    <div className=' w-full border border-l-0 border-t-0 flex flex-col relative overflow-auto  bg-gradient-to-b from-[#f7f7fb] via-[#fafafa] to-[#fdf4f8]'>
      <div className="h-[8vh] items-center text-xl border p-4 flex border-l-0 border-r-0 justify-between ">
        <div className=' flex px-4 gap-5'>
        <button><i className="fa-solid fa-layer-group"></i> AI Copilot</button>
        <button>Details</button>
        </div>
        <i className="fa-solid fa-table-columns fa-rotate-270"></i>

      </div>


      <div className="flex flex-col items-center my-auto ">
        <img src={logo} alt="Fin Ai Logo" className='h-[5vh] m-3' />
        <h2 className='font-bold'>Hi, I'm Fin AI Copilot</h2>
        <h2>Ask me anything about this conversation.</h2>
      </div>





      <div className="flex border justify-between p-3 rounded-2xl bottom-0 absolute w-[28vw] m-4">
      <input type="text" placeholder='Ask a question...' className='w-full outline-none border-none cursor-text' />
      <i className="fa-solid fa-arrow-up" style={{color: "gray"}}></i>

      </div>
    </div>
  )
}

export default RightComp


