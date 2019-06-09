import React, { useState } from 'react';

function TooltipBook({ book_img, title }) {
  const [liked, setLiked] = useState(true);
  const handleToggleLike = () => {
    setLiked(!liked);
  }
  return (
    <div className="tooltip_book">
      <img src={book_img} alt="" className="tooltip_book_img"/>
      <div className="tooltip_info">
        <h3>{title}</h3>
      </div>
      <button className="like"><i className={liked ? "fa fa-heart" : "fa fa-heart farlike"} onClick={handleToggleLike} /></button>
    </div>
  );
}

export default TooltipBook;