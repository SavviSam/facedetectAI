import Tilt from "react-parallax-tilt";
import "./Logo.css";
import logo from "./logo.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className=" Tilt br2 shadow-2"
        style={{ height: "125px", width: "125px" }}
        glareEnable={true}
      >
        <div style={{ paddingTop: "10px" }}>
          <img className="" src={logo} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
