import React from 'react'

export  function InBox({idSpan, la, className, idInput, type, val, min, onChange}) {
  return (
    <>
          <span id={idSpan}></span>
          <label htmlFor={la}>
            <input
              className={className}
              id={idInput}
              type={type}
              value={val}
              min={min}
              onChange={onChange}
            />
          </label>
      
    </>
  )
}


