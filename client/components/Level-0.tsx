import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Level0Component() {
  const [isOnFire, setIsActive] = useState(true)

  const bombFiles = [
    'client/public/images/activated-bomb.png',
    'client/public/images/deactivated-bomb.png',
  ]

  function handleClick() {
    setIsActive(!isOnFire)
    console.log(isOnFire)
  }

  return (
    <>
      <h2>Level 0</h2>
      <div className="bombDiv">
        <img
          onClick={handleClick}
          src={isOnFire ? bombFiles[0] : bombFiles[1]}
          alt="Activated bomb"
        />
      </div>
      <Link to ='/level1'>
        <button className={isOnFire ? 'hidden' : ''}>Proceed</button>
      </Link>
    </>
  )
}
