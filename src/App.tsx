import "./App.css";
import HomeView from "./views/HomeView/HomeView";
import React, { lazy, Suspense } from "react";
const RegisterView = lazy(
  () => import("./views/AuthView/RegisterView/RegisterView")
);
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeView />
    </Suspense>
  );
}

export default App;
