import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <>
      <h2>404</h2>
      <p>No page here.</p>
      <Link to="/">Back to vendors</Link>
    </>
  )
}

export default NotFoundPage