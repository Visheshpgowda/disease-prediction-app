from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle
import os

# Set the path for the model and scaler
MODEL_PATH = os.path.join(r'pickle_files', 'asthma_model.pkl')
SCALER_PATH = os.path.join(r'pickle_files', 'asthma_scaler.pkl')

# Load the model if it exists
if not os.path.exists(MODEL_PATH):
    print("Model file not found at:", MODEL_PATH)
else:
    with open(MODEL_PATH, 'rb') as file:
        model = pickle.load(file)

# Load the scaler if it exists
if not os.path.exists(SCALER_PATH):
    print("Scaler file not found at:", SCALER_PATH)
else:
    with open(SCALER_PATH, 'rb') as file:
        scaler = pickle.load(file)

# Define columns and scale ranges
COLUMNS = [
    'Gender', 'Ethnicity', 'BMI', 'Smoking', 'PhysicalActivity',
    'SleepQuality', 'PollutionExposure', 'PollenExposure', 'DustExposure',
    'PetAllergy', 'ShortnessOfBreath', 'ChestTightness', 'Coughing',
    'NighttimeSymptoms', 'ExerciseInduced'
]

# Scale ranges for continuous variables
SCALES = {
    'BMI': (15, 40),                   # Body Mass Index (15 to 40)
    'PhysicalActivity': (0, 10),       # Weekly Physical Activity (0 to 10 hours)
    'SleepQuality': (4, 10),           # Sleep Quality Score (4 to 10)
    'PollutionExposure': (0, 10),      # Pollution Exposure Score (0 to 10)
    'PollenExposure': (0, 10),         # Pollen Exposure Score (0 to 10)
    'DustExposure': (0, 10),
    'Ethnicity':(0,3),                 # Ethnicity scaled value
}

# Categorical variables
ETHNICITY = ["Caucasian", "African American", "Asian", "Other"]
SEX = ['Male', 'Female']
SMOKER_STATUS = ['Former smoker', 'Never smoked', 'smokes']

# Function to scale values
def scale_value(value, min_val, max_val):
    return (value - min_val) / (max_val - min_val)



# Function to process and predict asthma with probability
def predict_asthma(data):
    try:
        features = []

        # One-hot encoding for Gender
        if data['Sex'] == 'Male':
            sex = 0
        elif data['Sex'] == 'Female':
            sex = 1
        else:
            return {"error": "Invalid Sex"}, 400
        features.append((sex))

        # Label encoding for Ethnicity
        ethnicity = data.get('Ethnicity')
        ethnicity_index = -1
        if ethnicity == 'Caucasian':
            ethnicity_index = 0
        elif ethnicity == 'African American':
            ethnicity_index = 1
        elif ethnicity == 'Asian':
            ethnicity_index = 2
        elif ethnicity == 'Other':
            ethnicity_index = 3
        else:
            return {"error": "Invalid Ethnicity"}, 400
        in_val, max_val = SCALES['Ethnicity']
        scaled_value = scale_value(ethnicity_index, in_val, max_val)
        features.append(ethnicity_index)

        # BMI scaling
        bmi = data.get('BMI')
        if bmi is None:
            return {"error": "BMI is missing"}, 400
        min_val, max_val = SCALES['BMI']
        scaled_value = scale_value(bmi, min_val, max_val)
        features.append(scaled_value)
    
        # Smoker Status encoding
        smoker_status = data.get('SmokerStatus')
        if smoker_status == 'Never smoked':
            smoker_index = 0
        elif smoker_status == 'Former smoker' or smoker_status == 'smokes':
            smoker_index = 1
        else:
            return {"error": "Invalid Smoker Status"}, 400
        features.append((smoker_index))

        # Get continuous feature values
        for column in ['PhysicalActivity', 'SleepQuality', 'PollutionExposure', 'PollenExposure', 'DustExposure']:
            value = data.get(column)
            if value is None:
                return {"error": f"{column} is missing"}, 400
            min_val, max_val = SCALES[column]
            scaled_value = scale_value(value, min_val, max_val)
            features.append(scaled_value)
    
        # Add symptom features (binary)
        for symptom in ['PetAllergy','ShortnessOfBreath', 'ChestTightness', 'Coughing', 'NighttimeSymptoms', 'ExerciseInduced']:
            value = (1 if data.get(symptom) == "Yes" else 0)
            features.append((value))

        # Feature count validation
        if len(features) != len(COLUMNS):
            return {'error': f'Input data shape mismatch. Expected {len(COLUMNS)} features, got {len(features)}'}, 400

        # Convert features to a numpy array
        features = np.array(features).reshape(1, -1)

        # Predict asthma using the model
        output = model.predict(features)
        prediction_prob = model.predict_proba(features)[0][1]  # For binary classification, get probability for class 1

        # Return prediction result and the probability
        return {
            'prediction': int(output[0] > 0.5),  # Assuming 0 or 1 as classes for asthma detection
            'probability': float(prediction_prob)
        }

    except Exception as e:
        return {"error": str(e)}, 500
