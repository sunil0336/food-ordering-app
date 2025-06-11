import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Restaurants from "./components/Restaurants/Restaurants";

export default function App() {
  return (
    <div>
      <Header />
      <Restaurants />
      <About />
      <ContactUs />
    </div>
  )
}