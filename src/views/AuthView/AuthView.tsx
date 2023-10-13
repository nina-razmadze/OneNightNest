import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const RegisterView = lazy(() => import("./RegisterView/RegisterView"));

export default function AuthView() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <div className="c ">
          <Route path="/SignUp" element={<RegisterView />} />
        </div>
      </Routes>
    </Suspense>
  );
}
