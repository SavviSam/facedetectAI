import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

function App() {
  return (
    <div className="App pattern-grid-xl light-gray vh-100 ">
      <Navigation />
      <Logo />
      <ImageLinkForm />

      {/*<FaceRecognition/>} */}
    </div>
  );
}

export default App;
