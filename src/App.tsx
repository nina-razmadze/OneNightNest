import "./App.css";
import React, { lazy, Suspense } from "react";

import HomeView from "./views/HomeView/HomeView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterView from "./views/AuthView/RegisterView/RegisterView";
// const RegisterView = lazy(
//   () => import("./views/AuthView/RegisterView/RegisterView")
// );
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <HomeView />
          <Routes>
            <Route path="/SignUp" element={<RegisterView />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
