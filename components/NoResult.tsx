import React from 'react'

type NoResultProps = {
    text: string,
}

const NoResult = ({text}: NoResultProps) => {
  return (
    <div>{text}</div>
  )
}

export default NoResult