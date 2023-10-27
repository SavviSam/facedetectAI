import Tilt from "react-parallax-tilt";
import "./Logo.css";
import logo from "./logo.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className=" Tilt br2 shadow-2"
        style={{ height: "150px", width: "150px" }}
        glareEnable={true}
      >
        <div className="pt3">
          <img className="" src={logo} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
