# 🚖 MERN Cab Booking System

A full-stack **Cab Booking System** developed using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The application provides separate User and Admin modules with secure authentication, cab booking management, and administrative controls.

---

## 📌 Project Overview

The Cab Booking System allows users to register, log in, browse available cabs, book rides, and manage their bookings. It also provides an Admin panel to manage users, cabs, and bookings through a secure dashboard.

---

## ✨ Features

### 👤 User Module
- User Registration
- User Login with JWT Authentication
- View Available Cabs
- Book a Cab
- View My Bookings
- User Dashboard
- Logout

### 👨‍💼 Admin Module
- Admin Registration
- Admin Login
- Dashboard with Statistics
- View All Users
- Edit User Details
- Delete Users
- View All Bookings
- View All Cabs
- Add New Cab
- Edit Cab Details
- Delete Cab

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap 5
- CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt.js

### Database
- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```
Car Booking Project
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── uploads
│   ├── utils
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/SaiMahesh7598/APSCHE_MERN_STACK_Internship-Project.git
```

---

### Backend Setup

```bash
cd server
npm install
npm run dev
```

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **server** folder and add:

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 📸 Screenshots

Add screenshots of the following pages:

- Home Page
- User Login
- User Dashboard
- Available Cabs
- Book Cab
- My Bookings
- Admin Login
- Admin Dashboard
- Users Management
- Bookings Management
- Cab Management

---

## 📡 API Endpoints

### User APIs

- POST `/api/users/register`
- POST `/api/users/login`
- GET `/api/users/profile`

### Admin APIs

- POST `/api/admin/register`
- POST `/api/admin/login`

### Cab APIs

- GET `/api/cars`
- POST `/api/cars`
- PUT `/api/cars/:id`
- DELETE `/api/cars/:id`

### Booking APIs

- POST `/api/bookings`
- GET `/api/bookings`

---

## 🔒 Authentication

- JWT (JSON Web Token)
- Password Encryption using Bcrypt
- Protected Routes
- Secure Authentication Middleware

---

## 🎯 Future Enhancements

- Online Payment Integration
- Google Maps Integration
- Live Driver Tracking
- Booking Cancellation
- Ride History
- Fare Estimation
- Email Notifications
- OTP Verification

---

## 👨‍💻 Author

**Sai Mahesh Botu**

- GitHub: https://github.com/SaiMahesh7598
- LinkedIn: www.linkedin.com/in/sai-mahesh-b-a6a98a312

---

## 📄 License

This project is developed for educational and learning purposes.

---

## ⭐ Acknowledgement

Developed as a **Full Stack MERN Project** demonstrating authentication, CRUD operations, MongoDB integration, REST APIs, and responsive frontend development.
