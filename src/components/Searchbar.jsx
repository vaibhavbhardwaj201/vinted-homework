import React from 'react'
import { useGlobalContext } from '../context'


const Searchbar = () => {

    const {search, setSearch, isEnterPressed, setIsEnterPressed} = useGlobalContext();

const handleKeyDown = (e) => {
    if(e.key === "Enter" && search !== "") {
        setIsEnterPressed(!isEnterPressed)
    }
}

const searchHandle = () => {
    setIsEnterPressed(!isEnterPressed)
}

  return (
            <div className="search-bar">
                <form action='#' className='search-form' onSubmit={(e) => e.preventDefault()}>
                    <input 
                    className='textfield'
                    type="text" 
                    value={search} 
                    placeholder='Search for items' 
                    onChange={(e) => {setSearch(e.target.value);}}
                    onKeyDown={handleKeyDown}
                    name='search' />
                    <button className="search" onClick={searchHandle} >Search</button>
                </form>
            </div>
  )
}

export default Searchbar