import React, { useState, useRef, useEffect } from 'react';

const ChatSection = () => {
    // Define the dummy data (questions and responses)
    const dummyMessages = [
        { type: 'bot', message: "What kind of nonsense is this?" },
        { type: 'user', message: "Put me on the Council and not make me a Master!??" },
        { type: 'bot', message: "That's never been done in the history of the Jedi. It's insulting!" },
        { type: 'user', message: "Calm down, Anakin." },
        { type: 'bot', message: "You have been given a great honor." },
        { type: 'user', message: "To be on the Council at your age." },
        { type: 'bot', message: "It's never happened before." }
    ];


    const [messages, setMessages] = useState(dummyMessages);
    const [userMessage, setUserMessage] = useState('');

    // Reference for the last chat message
    const messagesEndRef = useRef(null);

    // Scroll to bottom whenever a new message is added
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSendMessage = () => {

        if (userMessage.trim() !== '') {
            setMessages([...messages, { type: 'user', message: userMessage }]);

            setTimeout(() => {
                const nextMessage = {
                    type: 'bot',
                    message: 'I am responding from the backend!'
                };

                setMessages((prevMessages) => [...prevMessages, nextMessage]);
            }, 1000);
        }
        setUserMessage('');
    };

    return (
        <main className='overflow-x-hidden'>
            <div className='flex items-center justify-center'>
                <div className='text-2xl font-semibold text-center mt-3 font-sans border-2 border-t-0 border-l-0 border-r-0 border-slate-200 shadow-md shadow-slate-400 p-3 text-black w-[80%]'>
                    Converse with Your Virtual Assistant
                </div>
            </div>
            <div className='relative sm:h-[610px] h-[600px]   overflow-scroll '>
                <div className="mt-10 mb-10 overflow-auto" id='chat-center'>
                    {messages.map((msg, index) => (
                        <div key={index} className={`chat ${msg.type === 'user' ? 'chat-end' : 'chat-start'}`}>
                            <div className={`chat-bubble ${msg.type === 'user' ? 'chat-bubble-info' : 'chat-bubble-primary'}`}>
                                {msg.message}
                            </div>
                        </div>
                    ))}
                    {/* This div ensures the scroll is always at the bottom */}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            <div className='flex absolute lg:bottom-0  z-3 mb-[1px] sm:ml-0 ml-8  '>
                <input
                    type="text"
                    placeholder='Enter your message'
                    className='bottom-10 p-3 sm:w-[610px] md:ml-14  sm:ml-12  md:w-[500px]  rounded-l-lg rounded-r-0 bg-white border text-black'
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                />
                <button
                    className='bg-blue-400 px-6 rounded-l-0 rounded-r-lg text-black'
                    onClick={handleSendMessage}
                >
                    Send message
                </button>
            </div>
        </main>
    );
}

export default ChatSection;
