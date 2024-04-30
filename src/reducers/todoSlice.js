import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:"todos", //estados de tareas
    initialState:{
        value:[
            {
            "nombre":"Realizar actividad 1",
            "descripcion":"Instalar paquetes de librerias para tarea 1",
            "fechaEntrega":"29-4-2024"
            }
    ]
    },

    // esctructura que se debe mantener
    reducers:{
        addTodo:(state,action)=>{
            state.value.push(action.payload)
        }
    }
})

export const{addTodo}=todoSlice.actions; //exportar a todo el proyecto
export default todoSlice.reducer; //Por default el reducer