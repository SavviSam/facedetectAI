import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "./components/Particles/Particles";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [inputError, setInputErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const onInputChange = (e) => {
    setInput(e.target.value);
    setInputErr(false);
  };

  async function onSubmit() {
    if (typeof input !== "string" || !/\.(jpg|jpeg|gif|png)$/.test(input)) {
      setInput("");
      setInputErr(true);
      return;
    }

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
          console.log("loading");
          setTimeout(resolve, 2000);
        };
        // Create a new image element
        img.onerror = () => {
          reject();
        };
        // Set the source of the image to the input
        img.src = url;
      });
      // console.log(input, typeof input);
    };

    try {
      await loadImage(input);
      console.log("success");

      setInput("yes it's valid");
    } catch (err) {
      setInput("");
      setInputErr(true);
    }
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter") onSubmit();
    else return;
  };

  return (
    <div
      className="App pattern-grid-xl
    blue vh-100 "
    >
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        keyDown={onKeyDown}
        onSubmit={onSubmit}
        input={input}
        onInputChange={onInputChange}
        error={inputError}
      />

      {/* <FaceRecognition/>} */}
      <Particles />
    </div>
  );
}

export default App;
