import { IoClose } from 'react-icons/io5';
import './imageheader.css';
const ImageHeader = ({ closeModel }) => {
  return (
    <>
      <div
        className="close"
        onClick={() => {
          closeModel();
        }}
      >
        <IoClose className="closeIcon" />
      </div>
    </>
  );
};

export default ImageHeader;
