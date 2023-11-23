import React from 'react'

const Label = ({text ,className,data}) => {
  return (
    <label for={data} className={`${className}`} >{text}</label>
  )
}

export default Label