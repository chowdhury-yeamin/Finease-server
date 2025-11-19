# FinEase Server

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-MIT-green)

FinEase Server is the **backend API** for FinEase — a personal finance manager.  
It provides secure authentication, transaction storage, user data protection, and report generation.

**Repository Description:**  
FinEase Server: A Node.js, Express, MongoDB backend for managing user transactions, reports, and authentication.  
Tech stack: Node.js, Express.js, MongoDB, JWT

**Topics:**  
nodejs express mongodb jwt backend api personal-finance finance-tracker server

---

## Features
- User Authentication (JWT-based)
- Add / Get / Update / Delete Transactions
- Category & Date Filtering for Reports
- Secure REST API with proper validations
- Encrypted password storage
- Fully connected to FinEase Client

---

## Technologies Used
- Node.js
- Express.js
- MongoDB / Mongoose
- JWT Authentication
- Dotenv

---

## API Endpoints
### Auth
- `POST /auth/register`
- `POST /auth/login`

### Transactions
- `POST /transactions`
- `GET /transactions`
- `GET /transactions/:id`
- `PATCH /transactions/:id`
- `DELETE /transactions/:id`

### Reports
- `GET /reports?type=monthly`
- `GET /reports?category=food`

---

## Dependencies
- express
- mongoose
- cors
- jsonwebtoken
- bcrypt
- dotenv

## Dev Dependencies
- nodemon

---

## Installation & Run Locally
```bash
# Clone the repository
git clone https://github.com/yourusername/fin-ease-server.git

# Navigate to the project folder
cd fin-ease-server

# Install dependencies
npm install

# Create environment file
touch .env
# Add environment variables:
# MONGO_URI=your-mongo-url
# JWT_SECRET=your-secret-key
# PORT=5000

# Start the development server
npm run dev
