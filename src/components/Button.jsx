import React from 'react'

const Button = ({
    children,
    type = 'Button',
    bgColor = 'bg-blue-400',
    textColor = 'text-white',
    className = '',
    ...props
}) => {
  return (
    <button className= {`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button