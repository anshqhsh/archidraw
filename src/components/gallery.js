import './gallery.css';
import { useState } from 'react';

import ImageContainer from './imageContainer';
import Image from './image';
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

  const deleteImg = id => {
    console.log('delete');
    const arr = idxList.filter(e => e.id !== currentId);
    setIdxImgList(arr);
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
          deleteImg={deleteImg}
        />
      </div>
      <div className="gallery">
        {idxList.map(image => (
          <Image image={image} getImg={getImg} />
        ))}
      </div>
    </>
  );
};

export default Gallery;
