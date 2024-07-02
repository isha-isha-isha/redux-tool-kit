//  please do not uncomment this becuse the same name is declare in this code and may be this rpugh part will import in other file when you try to import others things 
// import React from 'react'
// import {createSlice} from '@reduxjs/toolkit'
// const findItemIndex=(state,action)=>state.findIndex((cartItem)=>cartItem.productId===action.payload.productId)

// const slice=createSlice({
//     name:'cart',       // through this name it defines a action type it means our action type would be the combination of this name and reducer function name 
//     initialState:[],   // this is the initial state of the cart like we do define in redux function 
//     reducers:{          // in reducer key we pass the function of object in this reducer we mkae a function  this function in prve code we have make a switch Case here we convert the switch Case inot boject insede reducer we will define various type of function and that different function will do work exactly switch case like as we previous do 
//         add_to_cart(state,action){
//             const existingItemIndex=findItemIndex(state,action)
//             if(existingItemIndex !== -1 ){
//                 state[existingItemIndex].quantity +=1
//             }
//             else{
//                 state.push({...action.payload,quantity:1})
//             }
//         },
//         remove_from_cart(state,action){
//             const existingItemIndex=findItemIndex(state,action)
//             state.splice(existingItemIndex,1);
//         },
//         increase_quantity(state,action){
//             const existingItemIndex=findItemIndex(state,action)
//             state[existingItemIndex].quantity +=1
//         },
//         decrease_quantity(state,action){
//             const existingItemIndex=findItemIndex(state,action)
//             state[existingItemIndex].quantity -=1
//             if(state[existingItemIndex].quantity === 0)
//                 {
//                     state.splice(existingItemIndex,1)
//                 }
//         }
//     }
// })

// console.log(slice)   //  this slice create our reducer and action so we can export the reducer by slice.reducer  // it returns lots of things like actions reducer name etc remember it return reducer not reducers 
// // console.log(slice.reducer)
// export default slice.reducer    // we export the reducer function
// // console.dir(slice.reducer)

// // console.log("this is a slice ")
// // // console.log(slice)
// // console.log("thank god i acn console ")
// // console.log(slice.reducer)
// // console.log(slice.actions) // it returns all the action in the form of obj that we have create it will be    // {add_to_cart: ƒ, remove_from_cart: ƒ, increase_quantity: ƒ, decrease_quantity: ƒ}
// // console.log(slice.actions.add_to_cart({aa:11}))  // this value will directly pass to payload and remember it is not lie a props it will go data what it is not wrap in props  so it you pass like this {aa:11} it will go like obj it you pass only like this 11 it will like this and payload generally accept objects 
// // // so we can export actions as well  like this 
// // let productId=20;
// // console.log(slice.actions.add_to_cart(productId)) // 20 
// // console.log(slice.actions.add_to_cart({productId})) // 20 
// // // console.log(slice.actions.add_to_cart({11})) we cannot do like this 


// // we export the actions 
// export const {add_to_cart,remove_from_cart,increase_quantity,decrease_quantity}=slice.actions   // since slice.action return obj of actions so we destructure it here 
// // // you can ckeck the type like this 
// // console.log(add_to_cart.type)   // cart/add_to_cart  as you can see its type is the combination of above name adn the function name 






// function CartSlice() {
//   return (
//     <div>CartSlice</div>
//   )
// }
// export  {CartSlice}



// console.log(slice)   //  this slice create our reducer and action so we can export the reducer by slice.reducer  // it returns lots of things like actions reducer name etc remember it return reducer not reducers 
// // console.log(slice.reducer)
// // console.dir(slice.reducer)

// // console.log("this is a slice ")
// // // console.log(slice)
// // console.log("thank god i acn console ")
// // console.log(slice.reducer)
// // console.log(slice.actions) // it returns all the action in the form of obj that we have create it will be    // {add_to_cart: ƒ, remove_from_cart: ƒ, increase_quantity: ƒ, decrease_quantity: ƒ}
// // console.log(slice.actions.add_to_cart({aa:11}))  // this value will directly pass to payload and remember it is not lie a props it will go data what it is not wrap in props  so it you pass like this {aa:11} it will go like obj it you pass only like this 11 it will like this and payload generally accept objects 
// // // so we can export actions as well  like this 
// // let productId=20;
// // console.log(slice.actions.add_to_cart(productId)) // 20 
// // console.log(slice.actions.add_to_cart({productId})) // 20 
// // // console.log(slice.actions.add_to_cart({11})) we cannot do like this 


// // we export the actions 
// // // you can ckeck the type like this 
// // console.log(add_to_cart.type)   // cart/add_to_cart  as you can see its type is the combination of above name adn the function name 





// // you cannot imx redux and react component like this It's unusual to mix Redux logic and React components in the same file, which could make your code harder to maintain.
// // it's not a conventional or recommended pattern. It's better to keep your Redux logic separate from your React components, and use dedicated development tools or logging methods to inspect your Redux setup.