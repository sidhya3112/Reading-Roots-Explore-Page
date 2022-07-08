import React, {useState} from 'react';
import './PageContent.css';
import Select from 'react-select';
import search from '../../images/search.png'
import Books from '../Books/Books';

const PageContent = () => {


    const genres = [
        { label: 'All', value: 'All' },
        { label: 'Fiction', value: 'Fiction' },
        { label: 'Non-Fiction', value: 'Non-Fiction' },
        { label: 'Fantasy', value: 'Fantasy' },
        { label: 'Mystery', value: 'Mystery' },        
        { label: 'Horror', value: 'Horror' },        
        { label: 'Biography', value: 'Biography' },        
    ]

    const displayGenre = genres.map((genre)=>{
        return <option className='dropdown-option' value={genre.value}>{genre.label}</option>;
      });

    const years = [
        { label: 'All', value: 'All' },
        { label: '2022', value: '2022' },
        { label: '2021', value: '2021' },
        { label: '2020', value: '2020' },
        { label: '2019', value: '2019' }       
    ]

    const displayYear = years.map((year)=>{
        return <option className='dropdown-option' value={year.value}>{year.label}</option>;
      });

    const branches = [
        { label: 'All', value: 'All' }     
    ]

    const displayBranch = branches.map((branch)=>{
        return <option className='dropdown-option' value={branch.value}>{branch.label}</option>;
      });

    const sortList = [
        { label: 'All', value: 'All' },
        { label: 'Popularity', value: 'Popularity' },
        { label: 'Date Published', value: 'Date Published' },
        { label: 'Author', value: 'Author' },
        { label: 'Most Liked', value: 'Most Liked' },
    ]

    const displaySort = sortList.map((sort)=>{
        return <option className='dropdown-option' value={sort.value}>{sort.label}</option>;
      });

    const [option,setOption] = useState()

    function handleChange(event){
        setOption(event.target.value)
    }


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

                <select name='option' onChange={handleChange} className='dropdown-field'>
                   {displayGenre}
                </select>

            </div>
        </ul>

        <div className='user-related-section'>
            User Related Section
        </div>

        <ul className='filter-list'>
            <ul className="small-screen-filterlist-1">
               <div className='dropdown-menu year'>
                Year

                <select name='option' onChange={handleChange} className='dropdown-field'>
                   {displayYear}
                </select>

                </div>

                <div className='dropdown-menu branch'>
                Branch

                <select name='option' onChange={handleChange} className='dropdown-field'>
                   {displayBranch}
                </select>

                </div>
            </ul>

            <ul className="small-screen-filterlist-2">
                <div className='available-only'>
                    <input className='checkbox' type="checkbox" />
                    Available Only
                </div>

                <button className='filter-btn'>Filter</button>

                <select name='option' onChange={handleChange} className='dropdown-field'>
                   <option value="" disabled selected hidden>Sort</option>
                   {displaySort}
                </select>

            </ul>
        </ul>

        <Books
        noOfBooks='5'
        />
    </div>
  )
}

export default PageContent