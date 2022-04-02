import { IoClose, IoDownloadOutline, IoTrashOutline } from 'react-icons/io5';
import { saveAs } from 'file-saver';
import './imageheader.css';

const ImageHeader = ({ closeModel, url }) => {
  const downloadImage = () => {
    saveAs(url, 'image.jpg'); // Put your image url here.
  };
  return (
    <>
      <div className="header">
        <div className="close" onClick={closeModel}>
          <IoClose className="closeIcon" />
        </div>
        <div className="header-box">
          <div className="imgDown" onClick={downloadImage}>
            <IoDownloadOutline size={'24px'} />
          </div>
          <div className="detail-delete">
            <IoTrashOutline size={'24px'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageHeader;
