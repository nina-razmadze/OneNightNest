import "./App.css";
import { lazy, Suspense } from "react";

import HomeView from "./views/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const RegisterView = lazy(() => import("./views/Auth/Register/Register"));

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
