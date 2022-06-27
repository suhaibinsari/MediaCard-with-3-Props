import React from 'react'
import image from '../img/im1.jpeg'
const Mediacard = ({ title, body, imageURL, altText }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p><strong>{body}</strong></p>
      <img src={image} alt={altText}/>



    </div>
  )
}

export default Mediacard