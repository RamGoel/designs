import React from 'react'
import { BiMenu } from 'react-icons/bi'
import CategoryItemAtom from './atoms/category-item.atom'
const categories = [
    {
        text: 'All',
        id: 1,
        icon: <BiMenu className="text-xl" />
    },
    {
        text: 'Today\'s Deals',
        id: 2,
    },
    {
        text: 'Registry',
        id: 3,
    },
    {
        text: 'Customer Service',
        id: 4,
    },
    {
        text: 'Gift Cards',
        id: 5,
    },
    {
        text: 'Sell',
        id: 6,
    },

]
const AmazonCategories = () => {
    return (
        <div className='flex bg-gray-800 py-2 items-center justify-start'>
            {
                categories.map(item => {
                    return <CategoryItemAtom key={item.id} text={item.text} icon={item.icon} />
                })
            }
        </div>
    )
}

export default AmazonCategories