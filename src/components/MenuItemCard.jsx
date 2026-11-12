import { useState } from 'react'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'

function MenuItemCard({ item, onAdd }) {
  const [showNote, setShowNote] = useState(false)
  const { user } = useAuth()

  return (
    <div className="card item">
      <div className="thumb">{item.name[0]}</div>
      <span className="tag">{item.category}</span>
      <h3>{item.name}</h3>
      <p className="muted">{item.description}</p>
      <p className="price">RM {item.price.toFixed(2)}</p>

      {user ? (
        <>
          <button type="button" className="link" onClick={() => setShowNote(!showNote)}>
            {showNote ? 'Hide note' : 'Add note'}
          </button>
          {showNote && <textarea placeholder="E.g. no onions, extra sambal" rows="2" />}
        </>
      ) : (
        <p className="muted">
          <Link to="/login">Log in to add notes</Link>
        </p>
      )}

      <button
        className="btn"
        disabled={!item.available}
        onClick={() => onAdd(item)}
      >
        {item.available ? 'Add to cart' : 'Sold out'}
      </button>
    </div>
  )
}

export default MenuItemCard