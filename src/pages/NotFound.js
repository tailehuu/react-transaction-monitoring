import React from "react"
import { Link, useLocation } from "react-router-dom"

function NotFound() {
  const location = useLocation()

  return (
    <div className="m-3">
      <h1>404 page not found</h1>
      <code>{location.pathname}</code> not found. Back to <Link to="/">Home</Link>
    </div>
  )
}

export default NotFound