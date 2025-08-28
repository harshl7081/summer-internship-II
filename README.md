# 📦 Scrap Connect

Scrap Connect is a **MERN stack web application** developed during my **summer internship at RP Softech (19th May 2025 – 20th June 2025)**.  
The platform helps users **request scrap collection**, find **nearby dealers**, and track their requests, all through a **responsive UI built with Material-UI (MUI) and Tailwind CSS**.

---

## 🔗 **Live Demo**
[Frontend on Vercel](#) | [Backend on Render](#) *(Add links after deployment)*

---

## 📌 **Overview**
The aim of Scrap Connect is to **connect users with scrap dealers** through an easy-to-use online platform.  
Key Features:
- Submit **scrap collection requests** online
- Find **verified dealers with contact details & location**
- Track all your requests in a **dashboard**

---

## 🛠️ **Tech Stack**
**Frontend**: React.js, Material-UI (MUI), Tailwind CSS, Axios, React Router DOM  
**Backend**: Node.js, Express.js  
**Database**: MongoDB Atlas  
**Tools**: Git, GitHub, VS Code, Postman  
**Deployment**: Vercel (Frontend), Render (Backend)  

---

## ✨ **Features**
✔ Responsive **Landing Page** with Hero Section and Feature Grid  
✔ **Scrap Collection Form** with validation using React hooks  
✔ **Axios integration** with Express API  
✔ **Dealer Finder Page** with MUI Cards & Google Map embed  
✔ **My Requests Dashboard** with MUI Table (Sorting & Filtering)  
✔ Custom **MUI Theme** (Primary: Green, Secondary: Orange)  
✔ Deployment on **Vercel + Render** with MongoDB Atlas  

---

## 📅 **Internship Timeline – Day-Wise Progress**

### **Week 1 (19th May – 24th May)**
- **Day 1 (19 May)** – Internship introduction, project discussion, MERN stack setup overview  
- **Day 2 (20 May)** – Installed Node.js, MongoDB setup, created backend structure with Express  
- **Day 3 (21 May)** – Installed dependencies (`express`, `mongoose`, `cors`, `dotenv`, `nodemon`)  
- **Day 4 (22 May)** – Set up React frontend with `create-react-app`, installed MUI, Tailwind CSS, Axios, React Router DOM  
- **Day 5 (23 May)** – Created folder structure (frontend & backend), configured `concurrently` for running both servers  
- **Day 6 (24 May)** – Built **Navbar** using MUI AppBar & Drawer, implemented **routing** for pages: Home, Scrap Collection, Find Dealer, Recycle Info, My Requests  

---

### **Week 2 (26th May – 31st May)**
- **Day 7 (26 May)** – Created **Footer** using MUI Box, Typography, and Links  
- **Day 8 (27 May)** – Designed **Landing Page**: Hero Section, Feature Grid using MUI Grid + Card  
- **Day 9 (28 May)** – Styled Landing Page with **MUI + Tailwind utilities**  
- **Day 10 (29 May)** – Started building **Scrap Collection Request Form** using MUI TextFields and Select  
- **Day 11 (30 May)** – Added **React Hook Form validation** to Scrap Collection Form  
- **Day 12 (31 May)** – Applied responsive design tweaks using **MUI Grid + Tailwind CSS**  

---

### **Week 3 (2nd June – 7th June)**
- **Day 13 (2 June)** – Created MongoDB schema for requests using **Mongoose**  
- **Day 14 (3 June)** – Implemented **Express POST API** for saving scrap requests in MongoDB  
- **Day 15 (4 June)** – Connected backend to **MongoDB Atlas** using environment variables  
- **Day 16 (5 June)** – Integrated Scrap Form with API using **Axios** in React  
- **Day 17 (6 June)** – Added **Snackbar notifications** for success/error and **CircularProgress** for loading state  
- **Day 18 (7 June)** – Tested API integration & fixed minor UI issues  

---

### **Week 4 (9th June – 14th June)**
- **Day 19 (9 June)** – Developed **Find Dealer Page** using MUI Cards & Grid  
- **Day 20 (10 June)** – Embedded **Google Maps** for dealer locations  
- **Day 21 (11 June)** – Created **My Requests Dashboard** with **MUI Table** to show user requests  
- **Day 22 (12 June)** – Added **sorting & filtering** features in MUI Table  
- **Day 23 (13 June)** – Optimized **UI for responsiveness** on all devices  
- **Day 24 (14 June)** – Code cleanup and minor UI adjustments  

---

### **Week 5 (16th June – 20th June)**
- **Day 25 (16 June)** – Applied **Custom MUI Theme** (Primary: Green, Secondary: Orange) using ThemeProvider  
- **Day 26 (17 June)** – Added **Skeleton loaders** for better UX during API calls  
- **Day 27 (18 June)** – Deployed **Backend on Render**, tested all API endpoints  
- **Day 28 (19 June)** – Deployed **Frontend on Vercel**, connected with backend  
- **Day 29 (20 June)** – Final testing, bug fixes, prepared project documentation and report  

---

## ✅ **Project Plan (8 Stages)**
1. **Project Setup & Structure** – MERN setup, install dependencies, configure concurrently  
2. **Basic UI Layout** – Navbar, Footer, Routing  
3. **Landing Page** – Hero Section, Feature Grid, CTA  
4. **Scrap Collection Form** – MUI TextFields, Select, Validation  
5. **Backend API** – Express route for saving requests to MongoDB  
6. **Connect Form to API** – Axios integration, Snackbar, Loader  
7. **Dealer Finder & Dashboard** – Dealer Cards, Google Map, MUI Table  
8. **Deployment & UI Polish** – Deploy on Vercel/Render, Theme customization, Skeleton loaders  

---

## 🚀 **Installation & Setup**
```bash
# Clone the repository
git clone https://github.com/your-username/scrap-connect.git
cd scrap-connect

# Install dependencies for backend
cd backend
npm install

# Install dependencies for frontend
cd frontend
npm install

# Run both servers
npm run dev
