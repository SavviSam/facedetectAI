import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "./components/Particles";

function App() {
  return (
    <div
      className="App pattern-grid-lg
    blue vh-100 "
    >
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />

      {/* <FaceRecognition/>} */}
      <Particles />
    </div>
  );
}

export default App;
