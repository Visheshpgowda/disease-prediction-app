import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import TypingAnimation from '../typeAnimation/TypingAnimation';
function Suggestion() {
    const [content, setContent] = useState('');

    const gemini = async () => {
        try {
            const genAi = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
            const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = "Explain how AI works in 100 words generate like a paragraph";

            const result = await model.generateContent(prompt);
            console.log("the log is ", result.response.text());
            setContent(result.response.text());
        } catch (error) {
            console.error("Error generating content:", error);
        }
    };

    useEffect(() => {
        gemini();
    }, []);

    return (
        <div className=''>
            <div className='flex items-center justify-center mt-3'>
                <div className='text-2xl font-semibold text-center  font-sans border-2 border-t-0 border-l-0 border-r-0 border-slate-200 shadow-md shadow-slate-400  p-3 text-black w-[80%]'>Suggestions</div>
            </div>
            <div className='mt-6 ml-3 text-black '>
                <h2 className='font-semibold'>Things you need to keep in your mind....</h2>
            </div>
            <div id="content" className='text-black text-[14px] ml-3 mt-2 overflow-y-auto'>
                {content ? <TypingAnimation content={content} /> : 'Loading...'}
            </div>

        </div>
    );
}

export default Suggestion;
