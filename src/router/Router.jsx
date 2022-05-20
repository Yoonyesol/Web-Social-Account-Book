import React from "react";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/common/Sidebar";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import WritePage from "../pages/WritePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FriendListPage from "../pages/FriendListPage";
import AccountBookPage from "../pages/AccoutBookPage";
import CalendarPage from "../pages/CalendarPage";
import ChallengePage from "../pages/ChallengePage";
import CommunityPage from "../pages/CommuityPage";
import SettingPage from "../pages/SettingPage";

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/inex" element={<AccountBookPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/friendlist" element={<FriendListPage />} />
          {/* <Route path="/post/:postId" element={<PostPage />} /> */}
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
};
