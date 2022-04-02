import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import ImageHeader from './imageheader';
import './imageContainer.css';
const ImageContainer = ({
  closeModel,
  tempimgSrc,
  currentId,
  idxImgList,
  nextImg,
  prevImg,
  deleteImg,
}) => {
  return (
    <>
      <ImageHeader
        closeModel={closeModel}
        url={tempimgSrc}
        currentId={currentId}
        deleteImg={deleteImg}
      />
      <div className="imgDetailContainer">
        <img src={tempimgSrc}></img>
        {currentId === idxImgList.length - 1 ? null : (
          <div className="nextcusor" onClick={nextImg}>
            <IoChevronForwardOutline />
          </div>
        )}
        {currentId === 0 ? null : (
          <div className="prevcusor" onClick={prevImg}>
            <IoChevronBackOutline />
          </div>
        )}
      </div>
    </>
  );
};

export default ImageContainer;
