import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App