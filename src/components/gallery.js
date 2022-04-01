import axios from 'axios';
import './gallery.css';
import { useEffect, useState } from 'react';
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoClose,
} from 'react-icons/io5';
import ImageHeader from './imageheader';
const Gallery = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState();

  // image 데이터를 받아옴
  const fetchImages = async () => {
    try {
      setError(null);
      setImages(null);
      setLoading(true);
      const response = await axios.get(
        'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a7804447-abeb-473e-be8b-8025c4f624f6/test.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220401T064523Z&X-Amz-Expires=86400&X-Amz-Signature=a169cfec9b78caa79b729a462e52c25adafa36d19c19979b1402a18e3e15857e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test.json%22&x-id=GetObject'
      );
      setImages(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  // 아직 image가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
  if (!images) return null;

  const getImg = imgSrc => {
    setTempimgSrc(imgSrc);
    setModel(true);
    console.log(imgSrc);
  };
  const closeModel = () => {
    console.log('check');
    setModel(false);
  };

  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <ImageHeader closeModel={closeModel} />
        <img src={tempimgSrc}></img>
        <div className="nextcusor">
          <IoChevronForwardOutline />
        </div>
        <div className="prevcusor">
          <IoChevronBackOutline />
        </div>
      </div>
      <div className="gallery">
        {images.renderings.map(image => (
          <div
            className="imgContainer"
            key={image._id}
            onClick={() => getImg(image._id)}
          >
            <img className="image" src={image._id} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
