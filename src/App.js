import logo from "./logo.svg";
import "./App.css";
import { Home } from "./screens/Home";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="screen">
      <Home />
      <Navbar />
    </div>
  );
}

export default App;
