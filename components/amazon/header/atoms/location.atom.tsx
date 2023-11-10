import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const LocationAtom = () => {
    return (
        <div className='flex items-center justify-center'>
            <HiOutlineLocationMarker className="text-xl" />
            <div>
                <p className='text-xs'>Deliver to</p>
                <p className='font-bold text-xs'>India</p>
            </div>
        </div>
    )
}

export default LocationAtom