import React from 'react';
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-grid-carousel';
import './BooksSmallScreen.css';
import book1 from '../../images/book1.jpg'
import book2 from '../../images/book2.jpg'
import book3 from '../../images/book3.jpg'
import book4 from '../../images/book4.jpg'
import book5 from '../../images/book5.jpg'
import arrow from '../../images/right-chevron.png'
import BookCardSmallScreen from './BookCard/BookCardSmallScreen';


const BooksSmallScreen = () => {

    const MyDot = ({ isActive}) => (
        <div className='dot'
        style={{
            background: isActive? '#a2671a' : '#fff',
            border: '1px solid #a2671a'
        }}></div>
      )

  return (
    <div className='small-screen-carousel'>
        <Carousel
        dot={MyDot} 
        cols={1}
        rows={4}
        gap={20}
        loop={true}
        showDots={true}
        mobileBreakpoint={0}
        arrowLeft={<img src={arrow} alt="" className='carousel-left-arrow carousel-arrow'/>}
        arrowRight={<img src={arrow} alt="" className='carousel-right-arrow carousel-arrow'/>}
        >
            <Carousel.Item>
              <BookCardSmallScreen
              img={book1}
              title='Range'
              author='David Epstein'
              owner='Ishant'
              />
            </Carousel.Item>
            <Carousel.Item>
              <BookCardSmallScreen
              img={book2}
              title='The Kite Runner'
              author='Khaled Hosseini'
              owner='Shubham'
              />
            </Carousel.Item>
            <Carousel.Item>
              <BookCardSmallScreen
              img={book3}
              title='Wish I Could Tell You'
              author='Durjoy Datta'
              owner='Sidhya'
              />
            </Carousel.Item>
            <Carousel.Item>
              <BookCardSmallScreen
              img={book4}
              title='Think Like A Monk'
              author='Jay Shetty'
              owner='Jay'
              />
            </Carousel.Item>
            <Carousel.Item>
              <BookCardSmallScreen
              img={book5}
              title='Do Epic Shit'
              author='Ankur Warikoo'
              owner='Abhijeet'
              />
            </Carousel.Item>
            
        </Carousel>

    </div>
  )
}

export default BooksSmallScreen