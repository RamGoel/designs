import React from 'react'

type ListLinkAtomProps = {
    title: string,
    links: Array<{
        title: string,
        url: string
    }>
}
const ListLinkAtom = ({ title, links }: ListLinkAtomProps) => {
    return (
        <div>
            <p className='font-semibold'>{title}</p>
            {
                links.map((item, index) => (
                    <a href={item.url} key={index} className='text-sm text-gray-400 cursor-pointer hover:underline block my-2'>{item.title}</a>
                ))
            }
        </div>
    )
}

export default ListLinkAtom