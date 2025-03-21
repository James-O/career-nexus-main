import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import Navigate from '../components/layout/Navbar'
import Home from '../pages/dashboard/Home'
import ProfilePage from '../pages/dashboard/ProfilePage'
import MainNavbar from '../components/layout/MainNavbar'
import ErrorPage from '../components/ErrorPage'
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navigate />}>
            <Route index element={<Signup />} />
            <Route path='login' element={<Login />} /> {/* Removed leading slash */}
        </Route>
        <Route element={<MainNavbar />}>
            <Route path='home' element={<Home />} /> {/* Removed leading slash */}
            <Route path='profilepage' element={<ProfilePage />} /> {/* Removed leading slash */}
        </Route>
        <Route path='*' element={<ErrorPage />} />
    </Routes>
</BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     {/* Redirect from '/' to '/signup' */}
    //     <Route path="/" element={<Navigate to="/signup" replace />} />

    //     {/* Auth Routes */}
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/login" element={<Login />} />

    //     {/* Protected Routes */}
    //     <Route path="/dashboard" element={<MainNavbar />}>
    //       <Route index element={<Home />} />
    //       <Route path="profilepage" element={<ProfilePage />} />
    //     </Route>

    //     {/* Catch-All Error Page */}
    //     <Route path="*" element={<ErrorPage />} />
    //   </Routes>
    // </BrowserRouter>
  )
}

export default Router