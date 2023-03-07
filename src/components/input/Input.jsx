import React from 'react'

const Input = (props) => {
  return (
    <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} className="bg-inputbg text-xs py-2 pl-3 rounded" />
  )
}

export default Input