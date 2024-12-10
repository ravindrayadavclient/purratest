# Purra Test

This repository contains a Node.js backend and a React frontend project with a structured folder setup.

---

## Folder Structure

```plaintext
root/
├── backend/   # Node.js backend
├── frontend/  # React frontend
```

### Setup Instructions

1. Clone the Repository

git clone <repository_url>
cd root

2. Backend Setup (Node.js)

   1. Navigate to the backend folder:
      cd backend

   2. Install dependencies:
      npm install

   3. Create a .env file in the backend folder with the following variables:
      PORT=<your_port>
      MONGO_URI=<your_mongodb_connection_string>
      CORS_ORIGIN=<your_frontend_url>

   4. Start the backend server:
      npm start

3. Frontend Setup (React)

   1. Navigate to the frontend folder:
      cd frontend

   2. Install dependencies:
      npm install

   3. Start the React development server:
      npm start

###Running the Project
Start the backend server as described in the Backend Setup section.

Start the frontend server as described in the Frontend Setup section.

Open your browser and access the React app at:
http://localhost:3000
