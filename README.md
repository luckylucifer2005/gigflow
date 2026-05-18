# GigFlow - Smart Leads Dashboard

A full-stack Lead Management Dashboard built with the MERN stack (MongoDB, Express, React, Node.js). 
This application provides authentication, lead management (CRUD), advanced filtering, searching, and pagination.

## Tech Stack
- **Frontend**: React.js, TypeScript, TailwindCSS v4, Vite, Zustand
- **Backend**: Node.js, Express.js, TypeScript, MongoDB + Mongoose

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed and running (or a MongoDB Atlas URI)

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file (you can copy `.env.example`):
   ```bash
   cp .env.example .env
   ```
   *Ensure the `MONGO_URI` and `JWT_SECRET` are set correctly.*

4. Start the backend development server:
   ```bash
   npm run dev
   ```
   The backend will run on `http://localhost:5000`.

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend will run on the URL provided by Vite (e.g., `http://localhost:5173`).

## Features
- **Authentication**: Secure JWT-based login and registration.
- **Lead Management**: Add, edit, delete, and view leads.
- **Filters & Search**: Filter leads by Status and Source, search by name or email, and sort by latest or oldest.
- **Pagination**: Backend paginated data retrieval for efficiency (10 records per page).
- **Responsive UI**: A modern, clean, and interactive user interface built with TailwindCSS.
