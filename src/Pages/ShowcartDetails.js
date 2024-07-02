import React from 'react'
import NavbarPage from './NavbarPage'
import { useDispatch, useSelector } from 'react-redux'
import { decrease_quantity, increase_quantity, remove_form_cart } from '../Stores/Slices/mycart'


export default function ShowcartDetails() {
    const cartItem=useSelector((state)=>state.cartItem)
    const dispatch=useDispatch()
    const totalPrice=cartItem.reduce((accumulator,currentValue)=>accumulator+ currentValue.price * currentValue.quantity,0)
    const cartTable=cartItem.map(({productId,title,image,price,quantity})=>{
        return(
            <tr>
                <td><img src={image} alt={title} style={{height:'50px', width:'100%', objectFit:'cover'}}/></td>
                <td>{title}</td>
                <td>{price}</td>
                <td>
                    <button onClick={()=>dispatch(increase_quantity({productId}))}>increment</button>
                    {quantity}
                    <button onClick={()=>dispatch(decrease_quantity({productId}))}>decrement</button>

                </td>
                <td><button onClick={()=>dispatch(remove_form_cart({productId}))}>remove </button></td>
                <td>{price*quantity}</td>
            </tr>
        )
    })
       
  return (
    <>
    <NavbarPage/>
    <table>
       <thead>
        <tr>
            <th>image</th>
            <th>title </th>
            <th>price</th>
            <th>quantity</th>
            <th>remove</th>
            <th>total price </th>
        </tr>
       </thead>
       <tbody>
       {cartTable}
       </tbody>
    </table>
    <h2>total price : {totalPrice}</h2>
    </>
  )
}
