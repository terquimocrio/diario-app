import React from 'react';
import "./PagerButton.css"

const PagerButton = ({img, action}) => {
  return (
    <div className='button'>
      {img}
    </div>
  );
}

export default PagerButton;
