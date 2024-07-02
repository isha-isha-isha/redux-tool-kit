import { combineSlices, createSlice } from "@reduxjs/toolkit";
import productList from "../product";
const productSlice=createSlice({
    name:'product',
    initialState:productList,
    reducers:{}
})

export default productSlice.reducer;

console.log('this si productSlice', productSlice);
console.log("this is product slice action", productSlice.actions)
console.dir('this is reducer ',productSlice.reducer)
console.log("this is reducer initial state ",productSlice.reducer.getInitialState)




// why the heck that above code is not returnng a state 
// because we are not returning anything from the reducer but not it works at first you return only productSlice so it is undefine so you have to pass the  productSlice.reducer 

// import productList from "../product";
// const productReducer=(state=productList,acton)=>{
//     return state;
// }
// export default productReducer