import React, { Profiler } from 'react'
import { CgProfile } from "react-icons/cg";
const Profile = () => {
    return (
        <div>
            <div className='text-2xl font-semibold text-center  font-sans border-2 border-t-0 border-l-0 border-r-0 border-slate-200 shadow-md shadow-slate-400  p-3 text-black'>PROFILE</div>
            <div id='userDetails'>
                <div id='profileImageSection'>
                    <div className='flex items-center justify-center mt-10'>
                        <CgProfile size="200px" />
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <h1 className='text-xl font-bold text-black'>Somantah mikali</h1>
                        <h3 className='text-xs font-semibold text-black'>somu@gpt.com</h3>
                    </div>
                    <div id='basicDetails' className='text-black flex items-center justify-center  flex-col mt-10'>
                        <h1 className='text-2xl font-bold underline mb-3'>Basic Details</h1>
                        <p className='font-semibold '>Age : <span>22</span></p>
                        <p className='font-semibold '>weight : <span>45</span></p>
                        <p className='font-semibold '>Gender : <span>Male</span></p>
                        <p className='font-semibold '>Blood Group : <span>O+</span></p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
