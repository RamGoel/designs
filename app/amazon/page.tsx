import AmazonCategories from '@/components/amazon/categories/categories.component'
import AmazonHeader from '@/components/amazon/header/header'
import React from 'react'

const Amazon = () => {
  return (
      <div>
          <AmazonHeader />
          <AmazonCategories />
    </div>
  )
}

export default Amazon