import React from 'react'
import img from '../img/logo192.png'
const Mediacard = ({ title, body, img, altText }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p><strong>{body}</strong></p>
      <img src={img} alt={altText}/>



    </div>
  )
}

export default Mediacard