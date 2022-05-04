import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <>        
        <div class="navbar bg-base-100 sm:px-32 px-8 py-5 border-b-4 border-current" data-theme="bumblebee">
            <div class="navbar-start">                
                <Link to={'/'} className="btn btn-ghost normal-case text-2xl font-bold">Fine Art Shop</Link>
            </div>

            <div class="navbar-end">
            <div class=" hidden lg:flex">
                <ul class="menu menu-horizontal p-0 font-medium text-lg">
                <li><Link to={'/productos'}>Products</Link></li> 
                    <li><a>About Us</a></li>                   
                    <li><a>Contact</a></li>
                </ul>
            </div>            
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32 font-medium text-lg">
                    <li><Link to={'/productos'}>Products</Link></li> 
                        <li><a>About Us</a></li>                   
                        <li><a>Contact</a></li>
                    </ul>
                </div>                
            </div>
            {props.children}
        </div>
    </>
  )
}

export default NavBar