import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const RegisterView = lazy(() => import("./Register/Register"));

export default function AuthView() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <div className=" ">
          <Route path="/SignUp" element={<RegisterView />} />
        </div>
      </Routes>
    </Suspense>
  );
}
