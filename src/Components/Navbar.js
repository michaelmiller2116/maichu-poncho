import React from 'react'

const Navbar = (props) => {
  return(
    <ul className='Navbar'>
      <li id='navLi'>Home</li>
      <li id='navLi'>Our Ponchos</li>
      <li id='navLi'>Contact</li>
      <li id='navLi' onClick={props.toggleState}>Your Cart</li>
    </ul>
  )
}




export default Navbar