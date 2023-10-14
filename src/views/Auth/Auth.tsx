import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("./Login/Login"));
const Register = lazy(() => import("./Register/Register"));

export default function Auth() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}
