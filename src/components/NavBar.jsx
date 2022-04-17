import React from 'react'

const NavBar = (props) => {
  return (
    <>       
        <div className="navbar bg-base-100 px-32" data-theme="night">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Mi Tienda Online</a>
            </div>
            <div className="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Productos</a></li> 
                    <li><a>Nosotros</a></li>                   
                    <li><a>Contacto</a></li>
                </ul>                               
            </div>
            {props.children}
        </div>   
    </>
  )
}

export default NavBar