import {createSlice} from "@reduxjs/toolkit";

export const metaSlice = createSlice({
    name:"meta", //estados de tareas
    initialState:{
        value:[{
            "nombre":"Completar todos los cursos de TDS",
            "descripcion":"Ganar todos los cursos",
            "fechaEntrega":"31-12-2024"
        }]
    },

    // esctructura que se debe mantener
    reducers:{
        addMeta:(state,action)=>{
            state.value.push(action.payload)
        }
    }
})

export const{addMeta}=metaSlice.actions; //exportar a todo el proyecto
export default metaSlice.reducer; //Por default el reducer