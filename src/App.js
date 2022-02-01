import react, { useEffect, useState } from "react";
import "./App.css";
import "./assets/styles.css";
import { Home } from "./screens/Home/Home";
import { About } from "./screens/About/About";

import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [selectedSection, setSelectedSection] = useState("home");

  const renderSection = () => {
    if (selectedSection === "home") {
      return <Home />;
    }
    if (selectedSection === "about") {
      return <About />;
    }
  };

  return (
    <main className="screen">
      {renderSection()}
      <Navbar
        selectedItem={selectedSection}
        handlePress={(item) => setSelectedSection(item)}
      />
    </main>
  );
}

export default App;
