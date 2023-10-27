import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div className="">
      <p className="f3 fw5 black ">
        {"This magic brain will detect faces in your pictures. Give it a try"}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input className="f4 outline-0 pa2 w-70" type="text" />
          <button
            className="w-30 hover f4 white ph3 pv2 dib"
            style={{ backgroundColor: "#111941" }}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
