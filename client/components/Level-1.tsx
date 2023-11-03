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

  //make 2 enveloping divs, the bottom's class = bottomRight
 //We need "404 Not Found" <h2> and give it a class name to make it bigger
 //p tag which has the page not found message
 //contunue button and we need to change the link so it links level2
 // change the class name of the image to be "tiny"
 //in CSS make the image tiny
 //make the image appear bottom right



  return (
    <>
      <Link to ='/level1'>
        <button className={isOnFire ? 'hidden' : ''}>Proceed</button>
      </Link>

      <div className="bombDiv">
        <img
          onClick={handleClick}
          src={isOnFire ? bombFiles[0] : bombFiles[1]}
          alt="Activated bomb"
          />
      </div>

    </>
  )
}