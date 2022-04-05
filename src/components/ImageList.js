import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(e.target);
    e.target.classList.contains('right')
      ? props.onSearchSubmit(props.term, props.page + 1)
      : props.page !== 1 && props.onSearchSubmit(props.term, props.page - 1);
  };

  return (
    <div className="image-div">
      <div className="btn btn-left left">
        <button className="ui icon button left" onClick={handleSubmit}>
          <i className="left arrow icon"></i>
        </button>
      </div>
      <div className="image-list">{images}</div>
      <div className="btn btn-right right">
        <button className="ui icon button right" onClick={handleSubmit}>
          <i className="right arrow icon"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageList;
