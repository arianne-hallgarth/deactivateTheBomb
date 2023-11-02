import { useState } from 'react'

export default function Level0Component() {
  const [isActive, setIsActive] = useState(true)

  function handleClick() {
    setIsActive(!isActive)
    console.log(isActive)
  }

  return (
    <>
      <h2>Level 0</h2>
      <div>
        <img
          onClick={handleClick}
          src={
            isActive
              ? 'client/public/images/activated-bomb.png'
              : 'client/public/images/deactivated-bomb.png'
          }
          alt="Activated bomb"
        />
      </div>
    </>
  )
}
