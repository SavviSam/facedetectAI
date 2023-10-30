const FaceRecognition = ({ image }) => {
  return (
    <div className="center ma3">
      <div className="absolute mt2">
        <img src={image} alt="" width="500px" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
