import { useState } from 'react'

export default function Level0Component() {
  const [isOnFire, setIsActive] = useState(true)

  function handleClick() {
    setIsActive(!isOnFire)
    console.log(isOnFire)
  }

  return (
    <>
      <h2>Level 0</h2>
      <div>
        <img
          onClick={handleClick}
          src={
            isOnFire
              ? 'client/public/images/activated-bomb.png'
              : 'client/public/images/deactivated-bomb.png'
          }
          alt="Activated bomb"
        />
      </div>
      <div>
        <button className={isOnFire ? "hidden" : ""} > Proceed</button>
      </div>
    </>
  )
}
