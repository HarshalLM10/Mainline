import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx'
import CourseHome from './components/allcourses/CourseHome.jsx'
import Signup from './components/Signup.jsx'
import  ProtectedRoute  from './ProtectedRoutes/ProtectedRoutes.jsx'
import Contact from './components/contact/Contact.jsx'
import About from './components/about/About.jsx'
import Pricing from './components/pricing/Pricing.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      <Route index element={<ProtectedRoute>
        <Home/>
      </ProtectedRoute>} />
      <Route path="courses" element={<ProtectedRoute><CourseHome /></ProtectedRoute>} />
      <Route path="contact" element={<ProtectedRoute><Contact/></ProtectedRoute>} />
      <Route path="about" element={<ProtectedRoute><About /></ProtectedRoute>} />
      <Route path="pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
      <Route path="/login"  element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
  </div>
);