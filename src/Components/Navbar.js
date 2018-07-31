import React from 'react'

const Navbar = (props) => {
  return(
    <ul className='Navbar'>
      <li id='navLi'>Home</li>
      <li id='navLi'>Our Ponchos</li>
      <li id='navLi'>Contact</li>
      <li className='nav-cart' id='navLi' onClick={props.toggleCartModal}>Your Cart</li>
      <li className='nav-add' id='navLi' onClick={props.toggleAddPonchoModal}>Add Poncho</li>
    </ul>
  )
}

export default Navbar