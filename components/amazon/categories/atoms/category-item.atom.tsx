import React from 'react'

const CategoryItemAtom = ({ text, icon }: { text: string, icon?:any }) => {
    return (
        <div className='p-2 hover:opacity-60 cursor-pointer flex items-center justify-center'>
            {icon ? icon : null}
            <p className='text-sm'>{text}</p>
        </div>
    )
}

export default CategoryItemAtom