import React from 'react'

const Rating = ({ value, text, color }) => {
  let stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i}>
        <i
          style={{ color }}
          className={
            value >= i + 1
              ? 'fa-solid fa-star'
              : value >= i + 0.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
    )
  }

  return (
    <div className='rating'>
      {stars}
      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: 'f8e825',
}

export default Rating
