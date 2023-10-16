import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import UserProfile from "./UserProfile/UserProfile";
import Card from "./Card/Card";
import Statements from "./Statements/Statements";
import Dashboard from "./Dashboard/Dashboard";

export default function UserPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/userpage" element={<Dashboard />} />
          <Route path="/userpage/profile" element={<UserProfile />} />
          <Route path="/userpage/mylist" element={<Statements />} />
          <Route path="/userpage/card" element={<Card />} />
        </Routes>
      </Suspense>
    </div>
  );
}
