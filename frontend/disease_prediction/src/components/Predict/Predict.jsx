import React, { useState } from 'react';

const Predict = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const formFields = {
        1: [
            { name: "Gender", label: "Gender", type: "select", options: ["Male", "Female"] },
            {
                name: "AgeCategory", label: "Age Category", type: "select",
                options: ["0-9", "10-19", "20-24", "25-59", "60 or older"]
            },
            {
                name: "ETHNICITY", label: "Ethnicity", type: "select",
                options: ["Caucasian", "African American", "Asian", "Other"]
            },
            { name: "WeightInKilograms", label: "Weight (kg)", type: "number" },
            { name: "HeightInFeet", label: "Height (ft)", type: "number" }
        ],
        2: [
            { name: "BMI", label: "BMI", type: "number" },
            { name: "BloodGlucoseLevel", label: "Blood Glucose Level", type: "number" },
            { name: "HbA1cLevel", label: "HbA1c Level", type: "number" },
            { name: "ChestScan", label: "Chest Scan", type: "select", options: ["Yes", "No"] },
            {
                name: "GeneralHealth", label: "General Health", type: "select",
                options: ["Excellent", "Very good", "Good", "Fair", "Poor"]
            }
        ],
        3: [
            { name: "SmokingStatus", label: "Smoking Status", type: "select", options: ["Current", "Former", "Never"] },
            { name: "AlcoholConsumption", label: "Alcohol Consumption", type: "select", options: ["Yes", "No"] },
            { name: "PhysicalActivity", label: "Physical Activity (hours/week)", type: "number" }
        ],
        4: [
            { name: "SleepHours", label: "Sleep Hours (per night)", type: "number" },
            { name: "DietType", label: "Diet Type", type: "select", options: ["Vegetarian", "Non-Vegetarian", "Vegan"] }
        ],
        5: [
            { name: "PollutionExposure", label: "Pollution Exposure", type: "select", options: ["Low", "Moderate", "High"] },
            { name: "HousingCondition", label: "Housing Condition", type: "select", options: ["Good", "Average", "Poor"] }
        ],
        6: [
            { name: "SymptomDuration", label: "Symptom Duration (days)", type: "number" },
            { name: "PainSeverity", label: "Pain Severity", type: "select", options: ["None", "Mild", "Moderate", "Severe"] }
        ],
        7: [
            { name: "FamilySupport", label: "Family Support", type: "select", options: ["Excellent", "Good", "Fair", "Poor"] },
            { name: "EconomicStatus", label: "Economic Status", type: "select", options: ["High", "Medium", "Low"] }
        ]
    };

    const totalSteps = Object.keys(formFields).length;

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: ""
        }));
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

    const handleSubmit = () => {
        if (validateFields()) {
            console.log('Submitted data:', formData);
            alert("Form submitted successfully!");
        }
    };

    const getStepColor = (stepNumber) => {
        if (stepNumber < step) return "step-primary";
        if (stepNumber === step) return "step-primary";
        return "";
    };

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <ul className="steps steps-horizontal w-full mb-8">
                    {Object.keys(formFields).map((stepNum) => (
                        <li
                            key={stepNum}
                            className={`step ${getStepColor(parseInt(stepNum))}`}
                            data-content={stepNum}
                        >
                            Step {stepNum}
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
                                />
                            )}
                            {errors[field.name] && (
                                <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
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
                        ← Previous
                    </button>

                    {step === totalSteps ? (
                        <button
                            onClick={handleSubmit}
                            className="btn btn-primary"
                        >
                            Submit →
                        </button>
                    ) : (
                        <button
                            onClick={nextStep}
                            className="btn btn-primary"
                        >
                            Next →
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Predict;
