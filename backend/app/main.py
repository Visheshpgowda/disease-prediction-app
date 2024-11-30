from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

# Load the trained model
# model_path = r'C:/Users/vish/OneDrive/Desktop/4thsem/disease-prediction-app/backend/app/pickle_files/heart_model_pickle.pkl'
# print(f"Trying to open file: {model_path}")

with open('C:/Users/vishe/OneDrive/Desktop/4thsem/disease-prediction-app/backend/app/pickle_files/heart_model_pickle.pkl', 'rb') as file:
    model = pickle.load(file)


app = Flask(__name__)
CORS(app)  # Allow CORS for all routes

@app.route('/')
def home():
    return "Welcome to the Model API"
@app.route("/predictStroke", methods=["POST"])
def predict():
    # Get input data from frontend (user data)
    user_data = request.get_json()

    # Print incoming data for debugging (optional)
    print("Received data:", user_data)

    # Process the input data and convert categorical features to numeric if needed
    features1 = [
    [
        user_data["age"],  # Age
        1 if user_data["gender"].lower() == "male" else 0,  # Gender (Male = 1, Female = 0)
        1 if user_data["hypertension"].lower() == "yes" else 0,  # Hypertension (Yes = 1, No = 0)
        1 if user_data["heart_disease"].lower() == "yes" else 0,  # Heart Disease (Yes = 1, No = 0)
        1 if user_data["ever_married"].lower() == "yes" else 0,  # Ever Married (Yes = 1, No = 0)
        ["govt_job", "never_worked", "private", "self-employed", "children"].index(user_data["work_type"].lower()),  # Work Type (index value)
        1 if user_data["residence_type"].lower() == "urban" else 0,  # Residence Type (Urban = 1, Rural = 0)
        user_data["avg_glucose_level"],  # Average Glucose Level
        user_data["bmi"],  # BMI
        ["formerly smoked", "never smoked", "smokes", "unknown"].index(user_data["smoking_status"].lower()),  # Smoking Status (index value)
    ]
]
    features = [[0,4,0,0,0,0,1,82.10,27.1,0]]
    
    # Predict using the loaded model
    prediction = stroke_model.predict(features)  # Model's .predict() method

    # Convert the prediction result to a more user-friendly output (optional)
    prediction_label = "Stroke" if prediction[0] == 1 else "No Stroke"

    # Return the prediction as JSON
    print(prediction_label, prediction[0])
    return jsonify({"prediction": prediction_label, "probability": float(prediction[0])})
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the input data from the request (ensure it's in the correct format)
        data = request.get_json()

        # Ensure the 'features' key is in the data
        if 'features' not in data:
            return jsonify({'error': 'Features not provided'}), 400

        # Assuming your model takes an array of features (e.g., [feature1, feature2, ...])
        features = np.array(data['features']).reshape(1, -1)  # Reshape if needed

        # Predict using the loaded model
        prediction = model.predict(features)

        # Return the prediction result
        return jsonify({'prediction': prediction.tolist()})  # Convert ndarray to list

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
