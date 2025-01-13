<img width="1456" alt="Screenshot 2025-01-14 at 1 37 21 AM" src="https://github.com/user-attachments/assets/c2646232-5726-4446-abd1-4bbb039fecb1" /># Chronic Disease Prediction System

This project aims to predict the risk of four significant chronic diseases: asthma, diabetes, stroke, and cardiovascular disease using machine learning techniques. The application leverages ensemble learning models, specifically **XGBoost Classifier (XGBC)** and **Artificial Neural Networks (ANN)**, integrated with a **voting classifier** for improved accuracy.

The web application is built using **React** for the frontend and **Flask** for the backend, and it is fully deployed to provide real-time predictions based on user inputs.

## Features
- **Disease Prediction**: Accurately predict risks for asthma, diabetes, stroke, and heart diseases.
- **Machine Learning Models**: Ensemble learning combining XGBC and ANN models.
- **User-Friendly Interface**: Interactive web UI built with React.
- **API Integration**: Backend APIs to handle predictions and user inputs.
- **Scalability**: Modular design for adding new models or diseases.

## Screenshot Grid

Below is a grid showcasing the application's interface and key features:

| Home Page                        | Prediction Form                   |
|----------------------------------|-----------------------------------|
|<img width="1459" alt="Screenshot 2025-01-14 at 1 37 44 AM" src="https://github.com/user-attachments/assets/07dc7387-a322-44cf-8e86-a76ded9db306" />
 | ![Prediction Form](./images/form.png) |

| Results Page                     | Model Performance                |
|----------------------------------|-----------------------------------|
| ![Results Page](./images/results.png) | ![Model Performance](./images/performance.png) |

## Technologies Used

### Frontend:
- React
- CSS/Bootstrap for styling

### Backend:
- Flask
- Python

### Machine Learning:
- XGBoost Classifier
- Artificial Neural Networks (ANN)

### Deployment:
- Docker (optional for containerization)
- Hosting on AWS/GCP/Heroku

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/username/chronic-disease-prediction.git
   ```
2. Navigate to the project directory:
   ```bash
   cd chronic-disease-prediction
   ```
3. Install dependencies:
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```
   - Backend:
     ```bash
     cd backend
     pip install -r requirements.txt
     ```
4. Run the application:
   - Start the backend server:
     ```bash
     python app.py
     ```
   - Start the frontend:
     ```bash
     npm start
     ```
5. Open the application in your browser at `http://localhost:3000`.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
We welcome contributions! Please fork the repository and create a pull request for review.
