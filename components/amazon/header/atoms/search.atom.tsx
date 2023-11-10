import React from 'react'
import { BiSearch } from 'react-icons/bi'
const SearchAtom = () => {
    return (
        <div className='flex items-center overflow-hidden w-1/2 p-1 justify-center bg-white rounded-md mx-2'>
            {/* <select className='bg-gray-200 p-1 rounded-sm w-1/3 text-black'>
                <option value={'All'}>All</option>
                <option value={'Images'}>Images</option>
                <option value={'Apps'}>Apps</option>
                <option value={'Music'}>Music</option>
                <option value={'Videos'}>Videos</option>
            </select> */}
            <input placeholder='Search Amazon' className='text-xs w-full focus-visible:outline-none bg-white text-black p-2' type="text" />
            <button className='bg-yellow-500 p-2 rounded-lg '>
                <BiSearch className="text-black" />
            </button>
        </div>
    )
}

export default SearchAtom