import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function NavbarPage() {
    const cartItem=useSelector((state)=>state.cartItem)
    const itemCount = cartItem.reduce(
        (accumulator, currentItem) => accumulator + currentItem.quantity,
        0
      )
  return (
    <>
    <ul>
        <li> <NavLink to='/'>home</NavLink> </li>
        <li> <NavLink to='/cartdetails'>cartdetails</NavLink> </li>
        <li>quantity  {cartItem.reduce((accumulator,currentValue)=>accumulator+currentValue.quantity,0)}</li>
    </ul>
    </>
  )
}

export default NavbarPage