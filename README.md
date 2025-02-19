# TaskFlow Task Manager Web Application

TaskFlow is a full-stack task management web application built with the **MERN stack** (MongoDB, Express, React, Node.js). It allows users to register, log in, and manage their tasks with full **CRUD functionality** (Create, Read, Update, Delete). The app features **JWT-based authentication**, a **modern and responsive UI**, and centralized API configuration for seamless deployment across different environments.

## Table of Contents

- Features
- Technologies
- Live Demo
- Setup and Installation
- Main Workflows
- Code structure

## Features

✅ **User Authentication** - Secure login and registration using **JWT authentication**  
✅ **Task Management** - Users can **create, view, update, and delete** tasks  
✅ **Navigation Bar** - A **sticky header** featuring the **TaskFlow** logo and navigation buttons  
✅ **Centralized API Configuration** - Easily switch between **local and production environments**  
✅ **Secure API** - Uses **bcrypt** for password hashing and **JWT for authentication**  
✅ **Error Handling** - Proper validation and meaningful error messages  

## Technologies

### **Frontend**
- React.js (Hooks, Context API)
- React Router DOM
- CSS Modules for modular styling
- Axios for API requests

### ⚙ **Backend**
- Node.js and Express.js
- MongoDB + Mongoose (Database)
- JWT Authentication for secure login
- bcrypt for password hashing

### 🛠 **Other Tools**
- Jest + Supertest for Backend Testing
- Git, npm, dotenv for environment management

## Live Demo
 ### Frontend 
 - https://task-flow-frontend-three.vercel.app
 ### Backend 
  - https://task-flow-backend-ten.vercel.app

## Setup and Installation

### Clone the repository
   ```bash
   git clone git@github.com:eromsinghal/task-flow.git
   ```
### Backend Setup
   ```bash
    cd task-flow/backend
    npm install  // install dependencies
    npm run dev  // run server
   ```
   #### Set up environment variables for backend
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
  ```

### Frontend Setup
   ```bash
    cd task-flow/frontend
    npm install // install dependencies
    npm start  // run frontend app
   ```
   #### Set up environment variables for frontend
   ```bash
    REACT_APP_API_URL=http://localhost:5000
   ```

## Main Workflows

### User Authentication
- **User Registration** - Users sign up securely using email and password.
- **Login** - Users receive a **JWT token** upon successful login.
- **Logout** - Token is removed from local storage.

### Task Management
- **Create Task** - Users can add new tasks.
- **Task List View** - Users can view their existing tasks in a **responsive layout**.
- **Edit Task** - Users can modify task details (title, description, status).
- **Delete Task** - Tasks can be removed with a single click.

### Navigation & UI
- **Sticky Header** - Contains:
  - **TaskFlow Logo**
  - **"Profile" Button**
  - **"Logout" Button**

## Code structure

### Frontend (/frontend)
- **src** - Contains the overall code
- **src/components** - Contains all components and every component has thier own js and css file
- **Others** - index.js -> App.js serves as entry point and inside App.js all routes are defined

### Backend (/backend)
- **Controllers** - There is auth and task controller use to get and process data from models 
- **Middlewares** - There is auth and error middleware use to authenticate every route and handle error in every route
- **Models** - Models are used to have the schema defined for different mongodb collection and different models are created with the help of mongoose
- **Routes** - There is auth and task routes use to interact with controllers
- **tests** - Test cases for testing purpose
- **others** - Server.js -> App.js are entrypoints and App.js import all routes 

