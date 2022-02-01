import react, { useState } from "react";
import "./App.css";
import "./assets/styles.css";
import { Home } from "./screens/Home";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [selectedItem, setSelectedItem] = useState("about");

  return (
    <div className="screen">
      <Home />
      <Navbar
        selectedItem={selectedItem}
        handlePress={(item) => setSelectedItem(item)}
      />
    </div>
  );
}

export default App;
