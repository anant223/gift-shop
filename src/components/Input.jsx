import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Input = forwardRef(
  (
    {
      className = "", 
      type = "text",
      placeholder = "", 
      disabled = false, 
      required = false,
      shape,
      size,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <input
          ref={ref}
          className={`border p-2 rounded focus:outline-none focus:ring ${className} ${shape && shape} ${size && size}`}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          {...props} 
        />
      </div>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string, 
  type: PropTypes.string, 
  placeholder: PropTypes.string, 
  disabled: PropTypes.bool, 
  required: PropTypes.bool, 
};

export default Input;
