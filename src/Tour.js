import React, { useState } from 'react'

const Tour = ({ id, name, image, info, price, deleteItem }) => {
  const [read, setRead] = useState(true)

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {read ? info.substr(0, 100) : info}
          <button onClick={() => setRead(!read)}>
            {read ? 'Read More' : 'show Less'}
          </button>
        </p>
        <button onClick={() => deleteItem(id)} className="delete-btn">
          not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
