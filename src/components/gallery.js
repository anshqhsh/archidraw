import './gallery.css';
import { useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import ImageHeader from './imageheader';
const Gallery = images => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState();
  const [currentId, setCurrentId] = useState(0);

  const idxList = images.images.map((img, i) => {
    return { id: i, ...img };
  });
  const [idxImgList, setIdxImgList] = useState(idxList);

  // 상세보기에서 현재 id와 이미지 소스를 set해준다 .
  const getImg = (imgSrc, id) => {
    setTempimgSrc(imgSrc);
    setModel(true);
    setCurrentId(id);
    console.log(imgSrc, id);
  };
  const closeModel = () => {
    console.log('check');
    setModel(false);
  };
  const nextImg = () => {
    console.log('next');
    const current = currentId + 1;
    setTempimgSrc(idxImgList.find(v => v.id === current)._id);
    setCurrentId(current);
  };
  const prevImg = () => {
    console.log('prev');
    const current = currentId - 1;
    setTempimgSrc(idxImgList.find(v => v.id === currentId - 1)._id);
    setCurrentId(current);
  };
  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <ImageHeader closeModel={closeModel} />
        <img src={tempimgSrc}></img>
        <div className="nextcusor" onClick={nextImg}>
          <IoChevronForwardOutline />
        </div>
        {currentId === 0 ? null : (
          <div className="prevcusor" onClick={prevImg}>
            <IoChevronBackOutline />
          </div>
        )}
      </div>
      <div className="gallery">
        {idxList.map(image => (
          <div
            className="imgContainer"
            key={image.id}
            onClick={() => getImg(image._id, image.id)}
          >
            <img className="image" src={image._id} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
