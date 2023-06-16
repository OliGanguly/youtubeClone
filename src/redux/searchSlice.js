import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
    
    },
    reducers:{
        cacheResults:(state,action)=>{
            //merging two objs {...state,...action.payload}
            state=Object.assign(state,action.payload)
        }
    }

})
export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;
/*
*
Cache-If i store search result inside an array [i,ip,iph,ipho,iphon,iphone]
time complexity to find search element-O(n)-linear search one by one
array.indexOf()->O(n)
 ////////
 if I made it as a object
 time->O(1)
 {
    i,
    ip,
    iph,
    ipho,
    iphon,
    iphone
 }
 time complexity array=On(n)
 time complexity Object/map=On(1)-new Map()
*/