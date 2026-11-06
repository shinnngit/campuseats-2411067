import { useCart } from '../hooks/useCart.js'

function OrdersPage() {
  const { orders } = useCart()

  if (orders.length === 0) {
    return <p className="muted">No orders yet.</p>
  }

  return (
    <>
      <h2>My Orders</h2>
      {orders.map((order) => (
        <div key={order.id} className="card order">
          <p>
            <strong>{order.name}</strong> · Mahallah {order.mahallah} · Pickup {order.pickupTime}
          </p>
          <ul>
            {order.items.map((line) => (
              <li key={line.item.id}>
                {line.qty} × {line.item.name}
                {line.note && <span className="muted"> — Note: {line.note}</span>}
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: RM {order.total.toFixed(2)}</p>
        </div>
      ))}
    </>
  )
}

export default OrdersPage