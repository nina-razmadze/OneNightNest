import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import UserPageLayout from "@src/layouts/UserPageLayout/UserPage";

const Card = lazy(() => import("./Card/Card"));

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Statements = lazy(() => import("./Statements/Statements"));

const UserProfile = lazy(() => import("./UserProfile/UserProfile"));

export default function UserPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<UserPageLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="mylist" element={<Statements />} />
            <Route path="card" element={<Card />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
