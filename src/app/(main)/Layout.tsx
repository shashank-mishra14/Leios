import React from 'react'
import Sidebar from '@/components/sidebar'
type Props = {children: React.ReactNode}
import InfoBar from '@/components/infobar'
const Layout = (props: Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
      <Sidebar />
        <div className='w-full'>
          <InfoBar />
            {props.children}
        </div>
    </div>
  )
}
export default Layout