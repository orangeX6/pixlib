import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map(({ alt_description, id, urls }) => {
    return <img key={id} alt={alt_description} src={urls.regular} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
