import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

import PublicLayout from "./layouts/PublicLayout";


// Auth Pages
import LoginPage from "./pages/auth/LoginPage";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App