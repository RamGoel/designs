import React from 'react'
import FooterBottomAtom from './atoms/footer-bottom.atom'
import { footerLinks, listLinks } from './footer.constants'
import FooterLinksAtom from './atoms/footer-links.atom'
import ActionBar from './atoms/action-bar.atom'
import ListLinkAtom from './atoms/list-links.atom'
import BackTopAtom from './atoms/back-top.atom'

const AmazonFooter = () => {
  return (
    <div className='bg-gray-950 py-6'>
      <div className='flex w-10/12 mx-auto items-top justify-around py-7'>
        {
          listLinks.map((item, index) => {
            return (
              <ListLinkAtom
                key={index}
                title={item.title}
                links={item.links}
              />
            )
          })
        }
      </div>
      <ActionBar />
      <div className='w-10/12 mx-auto py-6 grid grid-cols-7 gap-10'>

        {
          footerLinks.map((link, index) => {
            return (
              <FooterLinksAtom
                darkText={link.darkText}
                lightText={link.lightText}
                key={index}
              />
            )
          })
        }
      </div>
      <BackTopAtom />

      <FooterBottomAtom />

    </div>
  )
}

export default AmazonFooter