import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <>       
        <div className="navbar bg-base-100 px-32 py-5 border-b-4 border-current" data-theme="bumblebee">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Fine Art Shop</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 font-medium text-lg">
                    <li><Link to={'/productos'}>Products</Link></li> 
                    <li><a>About Us</a></li>                   
                    <li><a>Contact</a></li>
                </ul>                               
            </div>
            {props.children}
        </div>   
    </>
  )
}

export default NavBar