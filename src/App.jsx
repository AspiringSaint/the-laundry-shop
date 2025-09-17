import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

import LandingPage from "./pages/LandingPage";
import TermsAndConditions from "./pages/TermsAndConditionsPage";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </>
  )
}

export default App