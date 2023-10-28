import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "./components/Particles/Particles";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div
      className="App pattern-grid-xl
    blue vh-100 "
    >
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm input={input} onInputChange={onInputChange} />

      {/* <FaceRecognition/>} */}
      <Particles />
    </div>
  );
}

export default App;
