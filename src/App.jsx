import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

// lazy loading
const About = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Error = lazy(() => import("./components/Error"));
const RestaurantMenu = lazy(() => import("./components/Restaurants/RestaurantMenu"));
const Cart = lazy(() => import("./components/Cart"));
const Login = lazy(() => import("./components/Restaurants/Login"));
const Register = lazy(() => import("./components/Register"));

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}