import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

import PublicLayout from "./layouts/PublicLayout";

// Auth Pages
import LoginPage from "./pages/auth/LoginPage";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      
      <Routes>

        <Route path="/" element={<LandingPage />} />

        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        
      </Routes>
    </>
  )
}

export default App