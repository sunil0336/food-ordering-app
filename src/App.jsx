import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import About from "./components/About";
// import ContactUs from "./components/ContactUs";
import Body from "./components/Body";
import Header from "./components/Header";
// import Error from "./components/Error";
// import RestaurantMenu from "./components/Restaurants/RestaurantMenu";
import Spinner from "./components/Spinner";

// lazy loading
const About = lazy(() => import("./components/About"));
const ContactUs = lazy(() => import("./components/ContactUs"));
// const Body = lazy(() => import("./components/Body"));
// const Header = lazy(() => import("./components/Header"));
const Error = lazy(() => import("./components/Error"));
const RestaurantMenu = lazy(() => import("./components/Restaurants/RestaurantMenu"));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Error />} />
          <Route path="/restaurants/:id" element={<RestaurantMenu />} />
          <Route path="*" element={<Error />} />

          {/* <Route path="/test" element={<Spinner />} /> */}

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}