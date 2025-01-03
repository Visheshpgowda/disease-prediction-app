import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = ' http://127.0.0.1:5000';


const Predict = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [predictions, setPredictions] = useState({});
    const [currentPrediction, setCurrentPrediction] = useState('');

    const formFields = {
        1: [
            { name: "Gender", label: "Gender", type: "select", options: ["Male", "Female"] },
            { name: "HeartDisease", label: "Heart Disease History", type: "select", options: ["Yes", "No"] },
            { name: "Hypertension", label: "Hypertension", type: "select", options: ["Yes", "No"] },

            { name: "AgeCategory", label: "Age Category", type: "select", 
              options: ["0-9", "10-19", "20-24", "25-59", "60 or older"] },
            { name: "Ethnicity", label: "Ethnicity", type: "select",
              options: ["Caucasian", "African American", "Asian", "Other"] },
            { name: "GeneralHealth", label: "General Health", type: "select", 
              options: ["Excellent", "Fair", "Good", "Poor", "Very good"] }
   {
                name: "AgeCategory", label: "Age Category", type: "select",
                options: ["0-9", "10-19", "20-24", "25-59", "60 or older"]
            },
            {
                name: "Ethnicity", label: "Ethnicity", type: "select",
                options: ["Caucasian", "African American", "Asian", "Other"]
            }

        ],
        2: [
            { name: "WeightInKilograms", label: "Weight (kg)", type: "number" },
            { name: "HeightInMeters", label: "Height (m)", type: "number" },

            { name: "HeighInFeet", label: "Height (ft)", type: "number" },

            { name: "BMI", label: "BMI", type: "number" },
            { name: "blood_glucose_level", label: "Blood Glucose Level", type: "number" },
            { name: "HbA1c_level", label: "HbA1c Level", type: "number" }
        ],
        3: [

            { name: "SmokerStatus", label: "Smoking Status", type: "select", 
              options: ["Never smoked", "smokes", "Former smoker"] },
            { name: "AlcoholConsumption", label: "Alcohol Consumption", type: "select", options: ["Yes", "No"] },
            { name: "AlcoholDrinkers", label: "Regular Alcohol Drinker", type: "select", options: ["Yes", "No"] },

            { name: "SmokerStatus", label: "Smoking Status", type: "select", options: ["Never smoked", "smokes", "Former smoker"] },
            { name: "AlcoholConsumption", label: "Alcohol Consumption", type: "select", options: ["Yes", "No"] },

            { name: "PhysicalActivity", label: "Physical Activity (hours/week)", type: "number" },
            { name: "SleepHours", label: "Sleep Hours (per night)", type: "number" }
        ],
        4: [
            { name: "ChestPain", label: "Chest Pain", type: "select", options: ["Yes", "No"] },
            { name: "Breathlessness", label: "Breathlessness", type: "select", options: ["Yes", "No"] },
            { name: "Fatigue", label: "Fatigue", type: "select", options: ["Yes", "No"] },
            { name: "StressLevel", label: "Stress Level", type: "select", options: ["Low", "Medium", "High"] }

        ],
        5: [
            { name: "HadAngina", label: "History of Angina", type: "select", options: ["Yes", "No"] },
            { name: "HadCOPD", label: "History of COPD", type: "select", options: ["Yes", "No"] },
            { name: "HadKidneyDisease", label: "History of Kidney Disease", type: "select", options: ["Yes", "No"] },
            { name: "DifficultyConcentrating", label: "Difficulty Concentrating", type: "select", options: ["Yes", "No"] },
            { name: "DifficultyWalking", label: "Difficulty Walking", type: "select", options: ["Yes", "No"] }
        ],
        6: [
            { name: "ChestScan", label: "Had Chest Scan", type: "select", options: ["Yes", "No"] },
            { name: "CovidPos", label: "COVID-19 Positive History", type: "select", options: ["Yes", "No"] }

        ]
    };

    const totalSteps = Object.keys(formFields).length;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let updatedFormData = {
            ...formData,
            [name]: value
        };

        if (name === "WeightInKilograms" || name === "HeightInMeters") {
            const weight = name === "WeightInKilograms" ? Number(value) : Number(formData.WeightInKilograms);
            const height = name === "HeightInMeters" ? Number(value) : Number(formData.HeightInMeters);
            
            if (weight && height) {
                updatedFormData.BMI = (weight / (height * height)).toFixed(2);
            }
        }

        setFormData(updatedFormData);
        setErrors({
            ...errors,
            [name]: ""
        });
    };

    const validateFields = () => {
        const currentFields = formFields[step];
        const newErrors = {};

        currentFields.forEach((field) => {
            if (!formData[field.name]) {
                newErrors[field.name] = `${field.label} is required.`;
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateFields()) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const predictDisease = async (disease) => {
        setCurrentPrediction(disease);
        const endpoint = {
            'Heart Disease': '/heartpredict',
            'Diabetes': '/diabetespredict',
            'Stroke': '/strokepredict',
            'Asthma': '/asthmapredict'
        }[disease];

        try {

            const response = await axios.post(`${API_BASE_URL}${endpoint}`, formData);
            setPredictions(prev => ({
                ...prev,
                [disease]: {
                    prediction: response.data.prediction === 1 ? "Positive" : "Negative",
                    probability: response.data.probability
                }
            }));
        } catch (error) {
            console.error(`Error predicting ${disease}:`, error);
            setPredictions(prev => ({
                ...prev,
                [disease]: {
                    error: true,
                    message: error.response?.data?.error || 'Prediction failed'
                }
            }));
        }
    };

    const handleSubmit = async () => {
        if (validateFields()) {
            setIsSubmitting(true);
            
            const diseases = ['Heart Disease', 'Diabetes', 'Stroke', 'Asthma'];
            
            for (const disease of diseases) {
                await predictDisease(disease);
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            
            setIsSubmitting(false);
        }
    };

    if (isSubmitting) {
        return (
            <div className="card w-full bg-base-100 shadow-xl h-screen">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl mb-6">Analyzing Your Health Data</h2>
                    <div className="space-y-6">
                        {['Heart Disease', 'Diabetes', 'Stroke', 'Asthma'].map((disease) => (
                            <div key={disease} className="flex items-center space-x-4">
                                {currentPrediction === disease ? (
                                    <span className="loading loading-spinner loading-md"></span>
                                ) : predictions[disease] ? (
                                    <div className="badge badge-success">✓</div>
                                ) : (
                                    <div className="badge badge-ghost">•</div>
                                )}
                                <span className="text-lg">
                                    {disease} Analysis
                                    {predictions[disease] && (
                                        <span className="ml-2 text-success">Complete!</span>
                                    )}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (Object.keys(predictions).length > 0) {
        return (
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-6">Prediction Results</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {Object.entries(predictions).map(([disease, result]) => (
                            <div key={disease} className={`alert ${result.prediction === "Positive" ? "alert-error" : "alert-success"}`}>
                                <div>
                                    <h3 className="font-bold">{disease}</h3>
                                    {result.error ? (
                                        <div className="text-error">
                                            {result.message}
                                        </div>
                                    ) : (
                                        <div className="text-sm">
                                            Result: {result.prediction}
                                            {result.probability && (
                                                <div>Probability: {(result.probability * 100).toFixed(1)}%</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button 
                        onClick={() => {
                            setIsSubmitting(false);
                            setPredictions({});
                            setStep(1);
                            setFormData({});
                        }}
                        className="btn btn-primary mt-6 w-full"
                    >
                        Start New Prediction
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <ul className="steps steps-horizontal w-full mb-8">
                    {Array.from({ length: totalSteps }).map((_, idx) => (
                        <li
                            key={idx}
                            className={`step ${idx + 1 <= step ? 'step-primary' : ''}`}
                        >
                            Step {idx + 1}
                        </li>
                    ))}
                </ul>

                <h2 className="card-title text-2xl mb-6">Step {step}</h2>

                <div className="space-y-4">
                    {formFields[step].map((field) => (
                        <div key={field.name} className="form-control w-full">
                            <label className="label">
                                <span className="label-text">{field.label}</span>
                            </label>
                            {field.type === 'select' ? (
                                <select
                                    name={field.name}
                                    onChange={handleInputChange}
                                    value={formData[field.name] || ''}
                                    className="select select-bordered w-full"
                                >
                                    <option value="">Select {field.label}</option>
                                    {field.options.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    onChange={handleInputChange}
                                    value={formData[field.name] || ''}
                                    className="input input-bordered w-full"
                                    placeholder={`Enter ${field.label}`}
                                    step="any"
                                />
                            )}
                            {errors[field.name] && (
                                <label className="label">
                                    <span className="label-text-alt text-error">{errors[field.name]}</span>
                                </label>
                            )}
                        </div>
                    ))}
                </div>

                <div className="card-actions justify-between mt-6">
                    <button
                        onClick={prevStep}
                        disabled={step === 1}
                        className="btn btn-outline"
                    >
                        Previous
                    </button>

                    {step === totalSteps ? (
                        <button
                            onClick={handleSubmit}
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            onClick={nextStep}
                            className="btn btn-primary"
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Predict;