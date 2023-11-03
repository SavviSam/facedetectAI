const FaceRecognition = ({ image }) => {
  return (
    <div className="center ma3">
      <div className="absolute mt2">
        <img id='inputImg'  src={image} alt="" width="600px" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
