import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatBot from "./feature/chat/presintition/pages/home_chat";

const AppRoutes = () => (
        <Routes>

                <Route path="/" element={<ChatBot />} />

        </Routes>
);

export default AppRoutes;
