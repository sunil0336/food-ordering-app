import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Login from "./components/Restaurants/Login";

// lazy loading
const About = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Error = lazy(() => import("./components/Error"));
const RestaurantMenu = lazy(() => import("./components/Restaurants/RestaurantMenu"));
const Cart = lazy(() => import("./components/Cart"));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/restaurants/:id" element={<RestaurantMenu />} />
          <Route path="*" element={<Error />} />

          <Route path="/test" element={<Login />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}