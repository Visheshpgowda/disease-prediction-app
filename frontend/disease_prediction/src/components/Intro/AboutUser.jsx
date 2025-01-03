import React from 'react';
import { useNavigate } from "react-router-dom"
const AboutUser = () => {
    const navigate = useNavigate()


    const onSubmit = () => 
        {
        navigate("/dashboard")
    }

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                style={{
                    clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    width: "36.125rem",
                    maxWidth: "none",
                    translateX: "-50%",
                    rotate: "30deg",
                    background: "linear-gradient(to top right, #ff80b5, #9089fc)",
                    opacity: 0.3,
                    smLeft: "calc(50%-40rem)",
                    smWidth: "72.1875rem",
                }}
            />
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Please add your Basic Details
                </h2>
            </div>
            <form className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="fullname" className="block text-sm/6 font-semibold text-gray-900">
                            Fullname
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="fullname"
                                name="fullname"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                            Phone Number
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="phone-number"
                                name="phone-number"
                                type="text"
                                placeholder="123-456-7890"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="age" className="block text-sm/6 font-semibold text-gray-900">
                            Age
                        </label>
                        <div className="mt-2.5">
                            <select
                                id="age"
                                name="age"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            >
                                <option value="">Select Age Range</option>
                                <option value="18-24">18-24</option>
                                <option value="25-34">25-34</option>
                                <option value="35-44">35-44</option>
                                <option value="45-54">45-54</option>
                                <option value="55-64">55-64</option>
                                <option value="65+">65+</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="height" className="block text-sm/6 font-semibold text-gray-900">
                            Height (cm)
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="height"
                                name="height"
                                type="number"
                                autoComplete="height"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="blood-group" className="block text-sm/6 font-semibold text-gray-900">
                            Blood Group
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="blood-group"
                                name="blood-group"
                                type="text"
                                autoComplete="blood-group"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm/6 font-semibold text-gray-900">
                            Gender
                        </label>
                        <div className="mt-2.5">
                            <select
                                id="gender"
                                name="gender"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        onClick={onSubmit}
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AboutUser;
