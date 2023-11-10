import AmazonCategories from '@/components/amazon/categories/categories.component'
import AmazonFooter from '@/components/amazon/footer/footer.component'
import AmazonHeader from '@/components/amazon/header/header'
import React from 'react'

const Amazon = () => {
  return (
      <div>
          <AmazonHeader />
          <AmazonCategories />
          <AmazonFooter />
    </div>
  )
}

export default Amazon