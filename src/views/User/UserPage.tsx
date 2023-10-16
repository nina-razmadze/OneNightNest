import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Card = lazy(() => import("./Card/Card"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const UserProfile = lazy(() => import("./UserProfile/UserProfile"));
const Statements = lazy(() => import("./Statements/Statements"));

export default function UserPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/userpage/profile" element={<UserProfile />} />
          <Route path="/userpage/mylist" element={<Statements />} />
          <Route path="/userpage/card" element={<Card />} />
        </Routes>
      </Suspense>
    </div>
  );
}
