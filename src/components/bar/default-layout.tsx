import React from 'react'

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
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
