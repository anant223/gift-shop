import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    children,
    shape,
    size,
    color,
    leftIcon,
    rightIcon,
    className,
    ...props
  }) => {
  return (
      <button
        className={`${className} text-center flex items-center cursor-pointer justify-center ${
          size && size
        } ${shape && shape} ${color && color} `}
        {...props}
      >
        {leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,     
  shape: PropTypes.string,                
  size: PropTypes.string,                  
  color: PropTypes.string,                 
  leftIcon: PropTypes.node,                
  rightIcon: PropTypes.node,               
  className: PropTypes.string,
}


export default Button;
