import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Body from "./components/Body";
import Header from "./components/Header";
import Error from "./components/Error";
import RestaurantMenu from "./components/Restaurants/RestaurantMenu";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Error />} />
          <Route path="/restaurants/:id" element={<RestaurantMenu />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}