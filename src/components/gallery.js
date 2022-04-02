import './gallery.css';
import { useState } from 'react';

import ImageContainer from './imageContainer';
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
  };
  const closeModel = () => {
    setModel(false);
  };

  const nextImg = () => {
    const current = currentId + 1;
    setTempimgSrc(idxImgList.find(v => v.id === current)._id);
    setCurrentId(current);
  };

  const prevImg = () => {
    const current = currentId - 1;
    setTempimgSrc(idxImgList.find(v => v.id === current)._id);
    setCurrentId(current);
  };
  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <ImageContainer
          closeModel={closeModel}
          tempimgSrc={tempimgSrc}
          currentId={currentId}
          idxImgList={idxImgList}
          nextImg={nextImg}
          prevImg={prevImg}
        />
      </div>
      <div className="gallery">
        {idxList.map(image => (
          <div
            className="imgContainer"
            key={image.id}
            onClick={() => getImg(image._id, image.id)}
          >
            <img
              className="image"
              alt="img"
              src={image._id}
              style={{ width: '100%' }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
