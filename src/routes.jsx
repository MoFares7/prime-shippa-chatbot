import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./feature/home/presentitons/pages/home_page";
import VariousNewsPages from "./feature/various/presentitons/pages/various_news";
import EducationsNewPage from "./feature/education/presentitons/pages/education_page";

const AppRoutes = () => (
        <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/elec-news" element={<VariousNewsPages />} />
                <Route path="/edu-news" element={<EducationsNewPage />} />
        </Routes>
);

export default AppRoutes;
