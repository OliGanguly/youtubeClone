import { createSlice } from "@reduxjs/toolkit";
import { offset_live_chat } from "../utils/constats";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
    message:[]
    },
    reducers:{
     addMessage:(state,action)=>{
        //restrice length to be 10, add one remove one , keep length 10
        state.message.splice(offset_live_chat, 1);
        state.message.unshift(action.payload);
     }
    }
})
export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;