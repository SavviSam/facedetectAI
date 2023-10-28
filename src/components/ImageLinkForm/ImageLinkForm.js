import "./ImageLinkForm.css";

const ImageLinkForm = ({ input, onInputChange, onSubmit, keyDown, error, loading }) => {
  return (
    <div className="">
      <p className="f3 font-md white ">
        {"This magic brain will detect faces in your pictures. Give it a try"}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            onKeyDown={keyDown}
            value={input}
            onChange={onInputChange}
            className="f4 outline-0 pa2 w-70"
            type="text"
            placeholder={error ? "Invalid image" : "Enter an image"}
          />
          <button
            onClick={onSubmit}
            className="w-30 hover f4 white ph3 pv2 dib"
            style={{ backgroundColor: "#111941" }}
          >
            Detect
          </button>
        </div>
      </div>
      <h1 className="white f2 font-reg mt5">
      {loading ? 'Loading...' : style={{display: 'none'}} }
      </h1>
    </div>
  );
};

export default ImageLinkForm;
