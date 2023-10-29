import "./ImageLinkForm.css";

const ImageLinkForm = ({ input, onInputChange, onButtonSubmit }) => {
  return (
    <div className="">
      <p className="f3 font-md white ">
        {"This magic brain will detect faces in your pictures. Give it a try"}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            value={input}
            onChange={onInputChange}
            onKeyDown={onInputChange}
            className="f4 outline-0 pa2 w-70"
            type="text"
          />
          <button
            onClick={onButtonSubmit}
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
