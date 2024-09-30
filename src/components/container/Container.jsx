import React from 'react'

const Container = ({children}) => {
  return (
    <div className='container m-auto px-[20px]'>
        {children}
    </div>
  )
}

export default Container