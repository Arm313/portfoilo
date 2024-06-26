import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFount/NotFound";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout";
import Skills from "../Pages/Skills/Skills";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/portfoilo" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
