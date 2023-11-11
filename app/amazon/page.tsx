import AmazonCategories from '@/components/amazon/categories/categories.component'
import AmazonFooter from '@/components/amazon/footer/footer.component'
import AmazonHeader from '@/components/amazon/header/header'
import SingleItemAtom from '@/components/amazon/products/atoms/block-card.atom'
import ProductRow from '@/components/amazon/products/product-row.component'
import React from 'react'
import { productsRow1 } from './amazon.constants'

const Amazon = () => {
  return (
    <div>
      <AmazonHeader />
      <AmazonCategories />
      <ProductRow rowData={productsRow1} />
      <ProductRow rowData={[...productsRow1].reverse()} />
      <AmazonFooter />
    </div>
  )
}

export default Amazon