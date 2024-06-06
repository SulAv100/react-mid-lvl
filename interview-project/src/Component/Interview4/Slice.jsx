import {createSlice} from '@reduxjs/toolkit'


const initialState={
    
    cartItems:[
    { id: 1, name: "Hayabusa", quantity: 0 },
    { id: 2, name: "Suzuki", quantity: 0 },
    { id: 3, name: "Ns 200", quantity: 0 },
    { id: 4, name: "Kawasaki", quantity: 0 },
    { id: 5, name: "SR1000", quantity: 0 }
]
}

const bikeSlice = createSlice({
    name:'bikes',
    initialState,
    reducers:{
        decrement: (state,action)=>{
            const item = state.cartItems.find(item=> item.id === action.payload);
            if(item){
                item.quantity-=1;
            }
        },
        increment:(state,action)=>{
            const item = state.cartItems.find(item=> item.id === action.payload);
            if(item){
                item.quantity+=1;
            }
        }

        
    }
})

export const  {increment, decrement} = bikeSlice.actions;
export default bikeSlice.reducer;