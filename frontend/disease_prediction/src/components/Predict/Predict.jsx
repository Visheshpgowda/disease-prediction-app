import React, { useState } from 'react';

const Predict = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    // Group related fields together
    const formFields = {
        1: [
            { name: 'name', label: 'Name', type: 'text' },
            { name: 'age', label: 'Age', type: 'number' },
            { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'] },
            { name: 'occupation', label: 'Occupation', type: 'text' },
            { name: 'experience', label: 'Years of Experience', type: 'number' }
        ],
        2: [
            { name: 'education', label: 'Education Level', type: 'select', options: ['High School', 'Bachelor', 'Master', 'PhD'] },
            { name: 'field', label: 'Field of Study', type: 'text' },
            { name: 'skills', label: 'Technical Skills', type: 'text' },
            { name: 'certifications', label: 'Certifications', type: 'text' },
            { name: 'languages', label: 'Programming Languages', type: 'text' }
        ],
        3: [
            { name: 'projectType', label: 'Project Type', type: 'select', options: ['Classification', 'Regression', 'Clustering', 'NLP', 'Computer Vision'] },
            { name: 'dataSize', label: 'Expected Data Size', type: 'text' },
            { name: 'framework', label: 'Preferred Framework', type: 'select', options: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Other'] },
            { name: 'hardware', label: 'Available Hardware', type: 'text' },
            { name: 'timeline', label: 'Project Timeline (months)', type: 'number' }
        ],
        4: [
            { name: 'objective', label: 'Project Objective', type: 'textarea' },
            { name: 'constraints', label: 'Project Constraints', type: 'textarea' },
            { name: 'success', label: 'Success Metrics', type: 'textarea' },
            { name: 'challenges', label: 'Expected Challenges', type: 'textarea' },
            { name: 'requirements', label: 'Special Requirements', type: 'textarea' }
        ],
        5: [
            { name: 'budget', label: 'Project Budget', type: 'number' },
            { name: 'team', label: 'Team Size', type: 'number' },
            { name: 'deadline', label: 'Project Deadline', type: 'date' },
            { name: 'updates', label: 'Update Frequency', type: 'select', options: ['Daily', 'Weekly', 'Bi-weekly', 'Monthly'] },
            { name: 'stakeholders', label: 'Key Stakeholders', type: 'text' }
        ],
        6: [
            { name: 'dataSources', label: 'Data Sources', type: 'textarea' },
            { name: 'preprocessing', label: 'Data Preprocessing Needs', type: 'textarea' },
            { name: 'validation', label: 'Validation Method', type: 'select', options: ['Cross-validation', 'Hold-out', 'Time-series split'] },
            { name: 'deployment', label: 'Deployment Environment', type: 'text' },
            { name: 'maintenance', label: 'Maintenance Plan', type: 'textarea' }
        ]
    };

    const totalSteps = Object.keys(formFields).length;

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Submitted data:', formData);
        // Handle form submission
    };

    const nextStep = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const progress = (step / totalSteps) * 100;

    return (
        <div className="form-container max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="form-header mb-6">
                <h2 className="text-xl font-bold mb-4 text-black">
                    Step {step}/{totalSteps}
                </h2>
                <div className="progress-bar w-full h-2 bg-gray-200 rounded">
                    <div
                        className="h-full bg-blue-500 rounded transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="form-content space-y-4">
                {formFields[step].map((field) => (
                    <div key={field.name} className="form-field mb-4">
                        <label className="block text-sm font-medium text-black mb-2">
                            {field.label}
                        </label>
                        {field.type === 'select' ? (
                            <select
                                name={field.name}
                                onChange={handleInputChange}
                                value={formData[field.name] || ''}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                            >
                                <option value="">Select {field.label}</option>
                                {field.options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        ) : field.type === 'textarea' ? (
                            <textarea
                                name={field.name}
                                onChange={handleInputChange}
                                value={formData[field.name] || ''}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                                rows={3}
                            />
                        ) : (
                            <input
                                type={field.type}
                                name={field.name}
                                onChange={handleInputChange}
                                value={formData[field.name] || ''}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="form-footer flex justify-between mt-6">
                <button
                    onClick={prevStep}
                    disabled={step === 1}
                    className={`px-4 py-2 rounded ${step === 1
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-white border border-gray-300 hover:bg-gray-50 text-black'
                        } flex items-center`}
                >
                    <span className="mr-2">←</span>
                    Previous
                </button>

                {step === totalSteps ? (
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
                    >
                        Submit
                        <span className="ml-2">→</span>
                    </button>
                ) : (
                    <button
                        onClick={nextStep}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
                    >
                        Next
                        <span className="ml-2">→</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Predict;