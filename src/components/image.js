import { useState } from 'react';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

import './image.css';
const Image = ({ image, getImg }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <div
      className="imgContainer"
      key={image.id}
      onClick={() => getImg(image._id, image.id)}
      onMouseOver={() => {
        setHovering(true);
      }}
      onMouseOut={() => setHovering(false)}
    >
      {hovering ? (
        <div className="hoverIcon">
          <IoEllipsisHorizontalSharp />
        </div>
      ) : null}
      <img
        className="image"
        alt="img"
        src={image._id}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default Image;
