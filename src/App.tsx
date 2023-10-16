import { lazy, Suspense } from "react";

import Home from "./views/Home/Home";
import Auth from "./views/Auth/Auth";

const User = lazy(() => import("./views/User/UserPage"));
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />

          <Route path="/auth/*" element={<Auth />} />
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
