# Chronic Disease Prediction System

This project aims to predict the risk of four significant chronic diseases: asthma, diabetes, stroke, and cardiovascular disease using machine learning techniques. The application leverages ensemble learning models, specifically **XGBoost Classifier (XGBC)** and **Artificial Neural Networks (ANN)**, integrated with a **voting classifier** for improved accuracy.

The web application is built using **React** for the frontend and **Flask** for the backend, and it is fully deployed to provide real-time predictions based on user inputs.

**Website Link**: [Chronic Disease Prediction App](https://disease-prediction-app.vercel.app/)

---

## Features
- **Disease Prediction**: Accurately predict risks for asthma, diabetes, stroke, and heart diseases.
- **Machine Learning Models**: Ensemble learning combining XGBC and ANN models.
- **User-Friendly Interface**: Interactive web UI built with React.
- **API Integration**: Backend APIs to handle predictions and user inputs.
- **Scalability**: Modular design for adding new models or diseases.

---

## Screenshot Grid

Below is a grid showcasing the application's interface and key features:

| **Home Page**                        | **Prediction Form**                   |
|--------------------------------------|---------------------------------------|
| <img width="1459" alt="Home Page" src="https://github.com/user-attachments/assets/07dc7387-a322-44cf-8e86-a76ded9db306" /> | <img width="1470" alt="Prediction Form" src="https://github.com/user-attachments/assets/49136189-914b-4ae9-8382-46883555a9f8" /> |

| **Results Page**                     | **Flow Diagram of Model**             |
|--------------------------------------|---------------------------------------|
| <img width="1469" alt="Results Page" src="https://github.com/user-attachments/assets/245d1e12-d982-40ff-88d0-4062713de5a3" /> | <img width="673" alt="Flow Diagram" src="https://github.com/user-attachments/assets/eac9539d-da6e-46d2-82ab-411385e49a41" /> |

---

## Technologies Used

### Frontend:
- React
- TailwindCSS

### Backend:
- Flask
- Python

### Machine Learning:
- XGBoost Classifier
- Artificial Neural Networks (ANN)

### Deployment:
- Frontend: Deployed on **Vercel**
- Backend: Deployed on **Railway.app**

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Somanath2314/disease-prediction-app.git
2. Navigate to the project directory:
   ```bash
   cd disease-prediction-app
3. Frontend-
    ```bash
    cd frontend/disease_prediction
    npm install
4. Backend-
   ```bash
   cd backend/app
   python -m venv venv
   source venv/bin/activate  # For Windows, use: venv\Scripts\activate
   pip install -r requirements.txt
5. Start the backend server:
   ```bash
   python main.py
6. Start the frontend:
   ```bash
   npm run dev

## Contact
Created by:
- Shreyas DK - shreyasdk.is22@bmsce.ac.in
- Somanath Mikali - somanath.is22@bmsce.ac.in
- Vishesh P Gowda - vishesh.is22@bmsce.ac.in
- Uttam Seervi - uttam.is22@bmsce.ac.in
- Uday CA - udayshankar.is23@bmsce.ac.in
