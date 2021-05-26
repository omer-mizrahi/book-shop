
import React from 'react'
import './_search.scss'
import { FiSearch } from 'react-icons/fi'

const Search = ({ className = '', onChange }) => {
    return <div className={`search ${className}`}>
        <input className='inSearch' type="search" placeholder='חיפוש' onChange={onChange} />
        <FiSearch />
    </div>
}

export default Search
