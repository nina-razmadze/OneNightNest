import Home from "./views/Home/Home";
import Auth from "./views/Auth/Auth";

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout/PublicLayout";

const UserPage = lazy(() => import("./views/User/UserPage"));
const Product = lazy(() => import("./views/Product/Product"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="auth/*" element={<Auth />} />
          <Route path="userpage/*" element={<UserPage />} />
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
