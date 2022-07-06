import React from 'react';
import './Books.css';
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-grid-carousel';
import book1 from '../../images/book1.jpg'
import book2 from '../../images/book2.jpg'
import book3 from '../../images/book3.jpg'
import book4 from '../../images/book4.jpg'
import book5 from '../../images/book5.jpg'
import BookCard from './BookCard/BookCard';

const Books = (props) => {

    const responsive = [
        {
            breakpoint: 5000,
            cols: 5,
            rows: 1,
            gap: 20,
            loop: true,
        },
        {
            breakpoint: 2000,
            cols: 4,
            rows: 1,
            gap: 20,
            loop: true,
        },
        {
            breakpoint: 1000,
            cols: 3,
            rows: 1,
            gap: 10,
            loop: true,
        },
        {
            breakpoint: 800,
            cols: 2,
            rows: 1,
            gap: 10,
            loop: true,
        },
    
    ]

    const MyDot = ({ isActive}) => (
        <div className='dot'
        style={{
            background: isActive? '#a2671a' : '#fff',
            border: '1.8px solid #a2671a'
        }}
        >
        </div>
      )

  return (
    <div className='books-section'>
        <div className='no-of-books'>
           Total Books:
           <p className='quantity'>{props.noOfBooks}</p>
        </div>
        
        <Carousel 
        dot={MyDot}
        showDots={true}
        responsiveLayout={responsive}
        >
            <Carousel.Item>
              <BookCard
              img={book1}
              title='Range'
              author='David Epstein'
              owner='jay'
              />
            </Carousel.Item>
            <Carousel.Item>
              <BookCard
              img={book2}
              title='The Kite Runner'
              author='Khaled'
              owner='jay'
              />
            </Carousel.Item>
            <Carousel.Item>
              <BookCard
              img={book3}
              title='Wish I Could Tell You'
              author='Durjoy'
              owner='jay'
              />
            </Carousel.Item>
            <Carousel.Item>
              <BookCard
              img={book4}
              title='Think Like A Monk'
              author='Jay'
              owner='jay'
              />
            </Carousel.Item>
            <Carousel.Item>
              <BookCard
              img={book5}
              title='Do Epic Shit'
              author='Ankur Warikoo'
              owner='jay'
              />
            </Carousel.Item>
            
        </Carousel>

        
    </div>
  )
}

export default Books