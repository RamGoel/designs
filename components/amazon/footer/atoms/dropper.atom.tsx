import React from 'react'
import { FaSort } from 'react-icons/fa'
const DropperAtom = ({
    value,
    onClickHandler,
    leftIcon,
    rightIcon
}: {
    value: string,
    onClickHandler: Function,
    leftIcon: any,
    rightIcon?: any
}) => {
    return (
        <div style={{
            border: '1px solid gray',
        }} className='flex items-center justify-between  p-2 rounded-md'>
            {leftIcon}
            <p className='text-xs mx-2'>{value}</p>
            {rightIcon ? rightIcon : null}
        </div>
    )
}

export default DropperAtom