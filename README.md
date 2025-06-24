# 🛒 ShoppyGlobe E-commerce Backend

Backend API for an e-commerce application built with **Node.js**, **Express**, and **MongoDB**.

---

## 🔗 Live GitHub Repo
[GitHub Repo] - ( https://github.com/Akash-Tri/project-shoppyglobe-backend )
 
---

## 📦 Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- ThunderClient (for API testing)

---

## 📁 Folder Structure

shoppyglobe-backend/
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── tests/ (screenshots)

## 🔐 Authentication Routes

| Method | Route        | Description          |
|--------|--------------|----------------------|
| POST   | `/register`  | Register new user    |
| POST   | `/login`     | Login and get token  |

---

## 🛍️ Product Routes

| Method | Route            | Description               |
|--------|------------------|---------------------------|
| GET    | `/products`      | Get all products          |
| GET    | `/products/:id`  | Get single product by ID  |

---

## 🛒 Cart Routes *(Protected)*

| Method | Route            | Description                      |
|--------|------------------|----------------------------------|
| POST   | `/cart`          | Add product to cart              |
| PUT    | `/cart/:id`      | Update cart item quantity        |
| DELETE | `/cart/:id`      | Delete cart item                 |

> **Note**: All cart routes require a JWT token in the header as `Bearer <token>`.

---

✅ `.env` is NOT pushed — use `.env.example`  
✅ All APIs tested via ThunderClient  
✅ Screenshots added to `tests-screenshots` folder  
✅ `README.md` complete  
✅ Repo is public and clean (no node_modules)
✅ Github Repo - https://github.com/Akash-Tri/project-shoppyglobe-backend 

---


⚙️ Run Locally


git clone https://github.com/Akash-Tri/project-shoppyglobe-backend
cd shoppyglobe-backend
npm install
cp .env.example .env  # Add your Mongo URI and JWT_SECRET
npm run dev

📸 Screenshots (Located in /tests/ folder)