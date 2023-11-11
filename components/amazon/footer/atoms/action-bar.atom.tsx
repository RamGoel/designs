"use client";
import React from 'react'
import Image from 'next/image'
import DropperAtom from './dropper.atom';
import { BsGlobe, BsCurrencyDollar } from 'react-icons/bs'
import { FaSort } from 'react-icons/fa';

const ActionBar = () => {
    const [language, setLanguage] = React.useState('English')
    const [currency, setCurrency] = React.useState('USD - U.S. Dollar')
    const [country, setCountry] = React.useState('United States')
    return (
        <div className='w-full bg-gray-800 py-6'>
            <div className='w-1/2 mx-auto flex items-center justify-between'>
                <Image
                    src={require('@/public/amazon/logo.png')}
                    className='invert'
                    alt='amazon logo'
                    width={70}
                    height={50} />
                <DropperAtom
                    value={language}
                    onClickHandler={() => { }}
                    leftIcon={
                        <BsGlobe
                            className='text-gray-100'
                        />}
                    rightIcon={<FaSort className='text-gray-100' />}
                />
                <DropperAtom
                    value={currency}
                    onClickHandler={() => { }}
                    leftIcon={
                        <BsCurrencyDollar className='text-gray-100' />
                    }
                />
                <DropperAtom
                    value={country}
                    onClickHandler={() => { }}
                    leftIcon={
                        <Image src={require('@/public/amazon/flag.png')} alt='flag-image' width={20} height={20} />
                    }
                />
            </div>
        </div>
    )
}

export default ActionBar