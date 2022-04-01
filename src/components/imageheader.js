import { IoClose } from 'react-icons/io5';
import './imageheader.css';
const ImageHeader = ({ closeModel }) => {
  console.log(closeModel);
  return (
    <>
      <div className="close">
        <IoClose
          className="closeIcon"
          onClick={() => {
            console.log('onclick');
            closeModel();
          }}
        />
      </div>
    </>
  );
};

export default ImageHeader;
