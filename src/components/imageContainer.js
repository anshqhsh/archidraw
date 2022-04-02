const ImageContainer = ({ x }) => {
  console.log(x);
  return (
    <>
      <div>
        {x}
        {/* {img.map(img => (
        <div className="imgContainer" key={img._id}>
          <img className="image" src={img._id} style={{ width: '100%' }} />
        </div>
      ))} */}
      </div>
    </>
  );
};

export default ImageContainer;
