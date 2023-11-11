import React from 'react'

const FooterLinksAtom = ({ darkText, lightText }: { darkText: string, lightText: string }) => {
    return (
        <div className='hover:underline cursor-pointer'>
            <p className='text-gray-100 text-xs'>{darkText}</p>
            <p className='text-gray-400 text-xs'>{lightText}</p>
        </div>
    )
}

export default FooterLinksAtom