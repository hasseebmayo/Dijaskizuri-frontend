import { Route, Routes, useLocation } from "react-router-dom";
import LandingPages from "./pages/LandingPage/LandingPages";
import PrivacyNPolicy from "./pages/PrivacyPolicy/PrivacyNPolicy";
import TermsOfUse from "./pages/PrivacyPolicy/TermsOfUse";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/privacy-policy" element={<PrivacyNPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsOfUse />} />
      </Routes>
    </>
  );
}

export default App;
