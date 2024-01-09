import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Paymentscashfreedashboard = React.lazy(
  () => import("pages/Paymentscashfreedashboard")
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Paymentscashfreedashboard />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
