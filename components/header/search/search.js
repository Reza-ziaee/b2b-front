import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <form className='w-full relative'>
        <div className='absolute text-black left-3 top-3'>
                    <SearchIcon />
        </div>

        <input
        className='focus:outline-none rounded-3xl p-3 w-full text-black '
         type="text" name="search"  placeholder='search' />
    </form>
  )
}

export default Search