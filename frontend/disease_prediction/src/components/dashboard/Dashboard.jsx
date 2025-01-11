import React from 'react'
import { Link } from 'react-router-dom'
import doctor from '../../assets/doctor.jpg'

const Dashboard = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${doctor})`,
                objectFit: "cover",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            {/* do not remove the above line it is providing the opacity to the image and the text */}
            <div className="hero-content text-neutral-content text-center">
                <div className="w-10/12">
                    <h1 className="mb-5 md:text-5xl text-2xl font-bold text-white font-italic">
                        Welcome to Arogya Vahini 
                    </h1>
                    <p className="mb-5 text-white text-[15px] font-normal font-rubik">
                        Empowering you with advanced AI-driven tools to identify potential health issues early. Get personalized suggestions and take proactive steps toward a healthier life.
                    </p>
                    <Link
                        to="/predict"
                        className="btn bg-transparent backdrop-blur-md font-bold hover:underline outline-none"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
