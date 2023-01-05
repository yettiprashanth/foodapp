import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navigation-wrap navbar-light bg-light shadow fixed-top">
  <div className="container">
    <Link className="navbar-brand fw-bold" to="/"  style={{color:"red"}}>SUGUNA</Link>
    <button className="navbar-toggler btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation"  >
      <span className="navbar-toggler-icon" style={{color:"red"}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar-menu" style={{backgroundcolor:"white"}}>
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item" style={{color:"red"}}>
          <Link className="nav-link active" aria-current="page" to="/"  style={{color:"red"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about"  style={{color:"red"}}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="product"  style={{color:"red"}}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact"  style={{color:"red"}}>Contact</Link>
        </li>
        
        
      </ul>
     
    </div>
     <button className='btn btn-outline-primary me-2 btn-sm'  style={{color:"red"}}><i className="fa-solid fa-arrow-right-to-bracket me-2"></i><Link to="Login"  style={{color:"red"}}>Login</Link></button> 
     <button className='btn btn-outline-primary me-2 btn-sm' style={{color:"red"}}><i className="fas fa-user me-2"></i><Link to="Register"  style={{color:"red"}}>Register</Link></button> 
     {/* <button className='btn btn-outline-primary'><i className="fas fa-shopping-basket me-2"></i><Link to="">Cart</Link></button> */}
  </div>
</nav>
    </div>
  )
}

export default Navbar
