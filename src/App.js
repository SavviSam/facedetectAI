import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Rank from "./components/Rank/Rank";
import Particles from "./components/Particles/Particles";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
    if (e.key === "Enter") {
      onButtonSubmit();
    }
  };
  const clarifaiRequestOptions = (imageURL) => {
    //Authentication variables for API call
    const PAT = "21c58464ed2247bdb1a794cb96dd64b1";
    const USER_ID = "savvisam";
    const APP_ID = "face-detection";

    const IMAGE_URL = imageURL;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    return requestOptions;
  };

  async function fetchRequest() {
    try {
      const resp = await fetch(
        "https://api.clarifai.com/v2/models/face-detection/outputs",
        clarifaiRequestOptions(input)
      );
      const request = await resp.json();
      console.log("result ", request.status);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const onButtonSubmit = () => {
    fetchRequest();
    setInput("");
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
        onButtonSubmit={onButtonSubmit}
        input={input}
        onInputChange={onInputChange}
      />

      <FaceRecognition />
      <Particles />
    </div>
  );
}

export default App;
