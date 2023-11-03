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
  const [image, setImage] = useState("");
  const [box, setBox] = useState({});

  const calcFaceLocation = (data) => {
    const faceDetect = data.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById("inputImg");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);

    return {
      leftCol: faceDetect.left_col * width,
      topRow: faceDetect.top_row * height,
      rightCol: width - faceDetect.right_col * width,
      bottomRow: height - faceDetect.bottom_row * height,
    };
  };

  const displayBox = (faceBox) => {
    console.log(faceBox);
    setBox(faceBox);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
    if (e.key === "Enter") {
      onButtonSubmit();
    }
  };

  const clarifaiRequestOptions = (imageURL) => {
    //Authentication variables for API call
    const PAT = "8a2284eadfd942228b7b4ac65360a86e";
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

      displayBox(calcFaceLocation(request));

      console.log("result ", request);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const onButtonSubmit = () => {
    fetchRequest();
    setImage(input);
    // setInput("");
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
      <FaceRecognition box={box} image={image} />

      <Particles />
    </div>
  );
}

export default App;
