import { createSlice } from "@reduxjs/toolkit";

export const opcionSlice=createSlice({

    name:"opcion", 
    initialState:{
        value:"tareas"
    },
        reducers:{
            cambiarOpcion:(state,action)=>{
                state.value=action.payload;
            }
        }
})
export const {cambiarOpcion}=opcionSlice.actions
export default opcionSlice.reducer