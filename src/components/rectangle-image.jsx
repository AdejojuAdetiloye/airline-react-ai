import React from 'react'

const RectangleImage = () => {
  return (
    <img
      src={require("../assets/images/rectangle.png")}
      alt="frame"
      width={"100%"}
      height={550}

      objectFit="cover"
    />

  )
}

export default RectangleImage
