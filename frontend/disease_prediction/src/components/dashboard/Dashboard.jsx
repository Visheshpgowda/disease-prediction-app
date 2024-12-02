import React from 'react'
import Profile from '../profile/Profile'
import ChatSection from '../chatSection/ChatSection'
import Suggestion from '../suggestions/Suggestion'
const Dashboard = () => {
    return (
        <main className='overflow-x-hidden '>
            <div className='flex lg:flex-row flex-col'>
                <div className='h-screen lg:w-[23%] bg-white border-r  border-t-0 border-slate-200 shadow-md shadow-slate-400  p-3 text-black'>
                    <Profile />
                </div>

                <div className='h-screen lg:w-[50%]   bg-white border'>
                    <ChatSection />
                </div>
                <div className='h-screen lg:w-[27%] bg-white  '>
                    <Suggestion />
                </div>
            </div>
        </main>
    )
}

export default Dashboard
