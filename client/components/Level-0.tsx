import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bombTicking from '../public/Bomb-ticking .mp3'

export default function Level0Component() {
  const [isOnFire, setIsActive] = useState(true)

  const bombFiles = [
    'client/public/images/activated-bomb.png',
    'client/public/images/deactivated-bomb.png',
  ]

  //define const for the audio file
  const audio = new Audio(bombTicking)

  function handleStart() {
    audio.play() // Start playing the audio when the "Start" button is clicked
  }

  function handleClick() {
    setIsActive(!isOnFire)

    if (isOnFire) {
      audio.pause()
    }
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
      <Link to="/level1">
        <button className={isOnFire ? 'hidden' : ''}>Proceed</button>
      </Link>
      <button onClick={handleStart}>Start</button>
    </>
  )
}
