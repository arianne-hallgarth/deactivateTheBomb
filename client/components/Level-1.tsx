import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Level1Component() {
  const [isOnFire, setIsActive] = useState(true)

  const bombFiles = [
    'client/public/images/activated-bomb.png',
    'client/public/images/deactivated-bomb.png',
  ]

  function handleClick() {
    setIsActive(!isOnFire)
    console.log(isOnFire)
  }

  //in CSS make the image tiny
  //make the image appear bottom right

  return (
    <>
      <div className="errorDiv">
        <h2 className="errorText">404 Not Found</h2>
        <p>
          We are so sorry. We can't find the page that you are looking for. It's
          been a rough day and we are having trouble thinking clearly right now.
          Maybe you could try making your own goddamn page. Hope you like that
          growth feedback.
        </p>
        <Link to="/level2">
          <button className={isOnFire ? 'hidden' : ''}>Proceed</button>
        </Link>
      </div>

      <div className="bottomRight">
        <img
          className="tiny"
          onClick={handleClick}
          src={isOnFire ? bombFiles[0] : bombFiles[1]}
          alt="Activated bomb"
        />
      </div>
    </>
  )
}
