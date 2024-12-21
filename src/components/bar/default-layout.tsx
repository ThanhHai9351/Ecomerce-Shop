import SalesNav from '@/components/header/sale-nav'
import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <SalesNav />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

const DefaultLayoutNotShow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

const DefaultLayoutAdmin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className='min-h-screen w-full bg-white text-black flex'>{children}</div>
}

export { DefaultLayout, DefaultLayoutAdmin, DefaultLayoutNotShow }
