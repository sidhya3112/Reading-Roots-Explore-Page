import React from 'react';
import './PageContent.css';
import Select from 'react-select';
import search from '../../images/search.png'
import Books from '../Books/Books';

const PageContent = () => {

    const genre = [
        { label: 'All', value: 'All' },
        { label: 'Fiction', value: 'Fiction' },
        { label: 'Non-Fiction', value: 'Non-Fiction' },
        { label: 'Fantasy', value: 'Fantasy' },
        { label: 'Mystery', value: 'Mystery' },        
        { label: 'Horror', value: 'Horror' },        
        { label: 'Biography', value: 'Biography' },        
    ]

    const year = [
        { label: 'All', value: 'All' },
        { label: '2022', value: '2022' },
        { label: '2021', value: '2021' },
        { label: '2020', value: '2020' },
        { label: '2019', value: '2019' }       
    ]

    const branch = [
        { label: 'All', value: 'All' }     
    ]

    const sort = [
        { label: 'All', value: 'All' },
        { label: 'Popularity', value: 'Popularity' },
        { label: 'Date Published', value: 'Date Published' },
        { label: 'Author', value: 'Author' },
        { label: 'Most Liked', value: 'Most Liked' },
    ]

  return (
    <div className='page-container'>
        <ul className='search-genre-bar'>
            <div className='search'>
                Keyword Search
                <form className='search-field'>
                    <img className='search-img' src={search} alt="" />
                    <input className='search-input-field' type="text" placeholder='Search by title or author' />
                </form>
            </div>

            <div className='dropdown-menu genre'>
                Book Genre
                <Select
                className='dropdown-field genre-field'
                options={genre}
                defaultValue={{ label: 'All', value: 'All' }}
                />
            </div>
        </ul>

        <div className='user-related-section'>
            User Related Section
        </div>

        <ul className='filter-list'>

            <div className='dropdown-menu year'>
                Year
                <Select
                className='dropdown-field year-field'
                options={year}
                defaultValue={{ label: 'All', value: 'All' }}
                />
            </div>

            <div className='dropdown-menu branch'>
                Branch
                <Select
                className='dropdown-field branch-field'
                options={branch}
                defaultValue={{ label: 'All', value: 'All' }}
                />
            </div>

            <div className='available-only'>
                <input className='checkbox' type="checkbox" />
                Available Only
            </div>

            <button className='filter-btn'>Filter</button>

            <Select
                className='dropdown-field sort-field'
                options={sort}
                placeholder='Sort'
            />
        </ul>

        <Books
        noOfBooks='5'
        />
    </div>
  )
}

export default PageContent