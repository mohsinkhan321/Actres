import React from "react"

const Card = ({Item}) =>{
    return(
        <>
<div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={Item.img} alt='profile' />
        </div>
        <div className='card-back'>
          <h1>{Item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {Item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {Item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {Item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {Item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
        </>
    )
}

export default Card