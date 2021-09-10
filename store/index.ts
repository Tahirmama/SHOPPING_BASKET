import { createSlice, configureStore } from "@reduxjs/toolkit"
import { INITIAL_STATE } from "./state"

//We use the product id to find the product and set its added value to true. 
//Notice that on each iteration of map,we are returning a new copy of the product by spreading the old one and then changing the added flag to true


const basketSlice = createSlice({
  name: "basket",
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action) => {
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item
        }

        return {
          ...item,
          added: true
        }
      })
    },
    remove: (state, action) => {
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item
        }

        return {
          ...item,
          added: false    //Removing is the same as adding, except we set added to false instead of true.
        }
      })
    }
  }
})

const store = configureStore({ reducer: basketSlice.reducer })

export const { add, remove } = basketSlice.actions

export { basketSlice, store }
