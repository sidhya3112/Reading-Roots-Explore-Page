import React from 'react';
import './BookCardSmallScreen.css';
import arrow from '../../../images/right-arrow.png'

const BookCardSmallScreen = (props) => {
  return (
    <div className='book-card-sm'>
       <div className='division-sm'>
            <img className='card-img-sm' src={props.img} alt="" />
            <div className='card-body-sm'>
                <div className='title-author-owner-sm'>
                    <div className='title-author-sm'>
                        {props.title}

                        <div className='by-author-sm'>
                            By &nbsp;
                            <p className='author-sm'>{props.author}</p>
                        </div>
                    </div>

                    <div className='owner-sm'>
                        Owner: &nbsp; {props.owner}
                    </div>
                </div>
                <button className='request-btn-sm btn-sm'>Request Book</button>
                <button className='view-btn-sm btn-sm'>View Details</button>
            </div>
        </div>
    </div>
  )
}

export default BookCardSmallScreen