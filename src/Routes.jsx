import React, { useEffect } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/ui/Header";
import NotFound from "./pages/NotFound";
import HomepageInteractiveDeveloperPortfolio from "./pages/homepage-interactive-developer-portfolio";

// Component to handle external redirects
const RedirectToExternal = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <div className="flex items-center justify-center h-screen bg-apple-white text-apple-gray-500">Redirecting...</div>;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <RouterRoutes>
          <Route path="/" element={<HomepageInteractiveDeveloperPortfolio />} />
          <Route path="/homepage-interactive-developer-portfolio" element={<HomepageInteractiveDeveloperPortfolio />} />

          {/* Social Redirects */}
          <Route path="/linkedin" element={<RedirectToExternal url="http://www.linkedin.com/in/ajpacific" />} />
          <Route path="/github" element={<RedirectToExternal url="https://github.com/AJpacific" />} />
          <Route path="/leetcode" element={<RedirectToExternal url="https://leetcode.com/u/AJpacific/" />} />
          <Route path="/codeforces" element={<RedirectToExternal url="https://codeforces.com/profile/AJpacific" />} />
          <Route path="/resume" element={<RedirectToExternal url="https://drive.google.com/drive/folders/1SdoRbrI4-a58DQPXN5V_ryLVdvofROgA?usp=drive_link" />} />

          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
