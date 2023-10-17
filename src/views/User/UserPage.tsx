import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import UserPageLayout from "@src/layouts/UserPageLayout/UserPage";

const Payment = lazy(() => import("./Payment/Payment"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));

const Statements = lazy(() => import("./Statements/Statements"));
const UserProfile = lazy(() => import("./UserProfile/UserProfile"));

const CreditCard = lazy(() => import("./Payment/CreditCard/CreditCard"));

export default function UserPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<UserPageLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="payment" element={<Payment />} />
            <Route path="creditcard" element={<CreditCard />} />
            <Route path="mylist" element={<Statements />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
