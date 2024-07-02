import { createSlice } from "@reduxjs/toolkit";

const findItemIndex=(state,action)=>state.findIndex((cartItem)=>cartItem.productId === action.payload.productId)
const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add_to_cart(state,action){
            const existingItemIndex=findItemIndex(state,action);
            if(existingItemIndex !== -1 )
                {
                    state[existingItemIndex].quantity +=1
                }
                else{
                    state.push({...action.payload,quantity:1})
                }
        },
        remove_form_cart(state,action)
        {
            const existingItemIndex=findItemIndex(state,action);
            state.splice(existingItemIndex,1);
        },
        increase_quantity(state,action){
            const existingItemIndex=findItemIndex(state,action);
            state[existingItemIndex].quantity +=1;
        },
        decrease_quantity(state,action){
            const existingItemIndex=findItemIndex(state,action);
            state[existingItemIndex].quantity -=1;
            if(state[existingItemIndex].quantity === 0)
                {
                    state.splice(existingItemIndex,1);
                }
        }

    }
})

export default cartSlice.reducer
export const {add_to_cart,remove_form_cart,increase_quantity,decrease_quantity}=cartSlice.actions;


console.log('this is cart slice ',cartSlice)