import React from 'react';
import './BookCard.css';
import arrow from '../../../images/right-arrow.png'

const BookCard = (props) => {
  return (
    <div className='book-card'>
        <img className="card-img" src={props.img} alt=""  />
        <div className="card-body">
            <div className="card-title">
                <p className='title'>{props.title} </p>
                &nbsp; by
                <p className="author"> &nbsp; {props.author}</p>
            </div>
            <div className="card-owner">
                Owner:
                <p className="owner-name">&nbsp; {props.owner}</p>
            </div>
            <div className="request-book">
                <button className='request-book-btn'>
                    Request Book
                </button>
                <img className='right-arrow' src={arrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default BookCard