import React from 'react';

function Card({
  title, 
  description, 
  author, 
  bookImg,
  isAdded,
  setIsAdded
}) {
  console.log(isAdded)
  return (
    <div className="card">
      <img src={bookImg} className="card-img-top" alt="Game of thrones" />
      <div className="card-body">
        <div className="book-info">
          <h5 className="card-title">{title}</h5>
          <a href="#" className="card-author">{author}</a>
          <p className="card-description">{description}</p>
        </div>
        <div className="book-buy">
          {isAdded ?
            (<button className="btn btn-info">Go to cart</button>)
            :
            (<button className="btn btn-success" onClick={setIsAdded(false)}>Buy</button>) }
        </div>
      </div>
    </div>
  );
}

export default Card;