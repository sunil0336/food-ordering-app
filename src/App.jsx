import Header from "./components/Header";
import Restaurants from "./components/Restaurants/Restaurants";

export default function App() {
  return (
    <div>
      <Header />
      <Restaurants />
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>
    </div>
  )
}