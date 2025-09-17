import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

import LandingPage from "./pages/LandingPage";
import PublicLayout from "./layouts/PublicLayout";

// Auth Pages
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      
      <Routes>

        <Route path="/" element={<LandingPage />} />

        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        
      </Routes>
    </>
  )
}

export default App