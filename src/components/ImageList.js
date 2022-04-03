import React from 'react';

const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map(({ alt_description, id, urls }) => {
    return <img key={id} alt={alt_description} src={urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
