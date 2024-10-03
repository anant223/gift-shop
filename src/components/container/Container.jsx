import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`container m-auto px-[20px] ${className}`}>
        {children}
    </div>
  )
}

export default Container