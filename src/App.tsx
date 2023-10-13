import "./App.css";
import React, { lazy, Suspense } from "react";

import HomeView from "./views/HomeView/HomeView";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import RegisterView from "./views/AuthView/RegisterView/RegisterView";
const RegisterView = lazy(
  () => import("./views/AuthView/RegisterView/RegisterView")
);
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/SignUp" element={<RegisterView />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
