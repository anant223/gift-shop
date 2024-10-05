import React from 'react'

const Container = ({children}) => {
  return (
    <div className={`container max-w-7xl m-auto px-[15px] md:px-[30px] lg:px-[80px]`}>
        {children}
    </div>
  )
}

export default Container