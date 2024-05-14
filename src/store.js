// maneja todos los estados de nuestro proyecto
import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./reducers/todoSlice"
import metaReducer from "./reducers/metasSlice"
import opcionReducer from "./reducers/opcionSlice"
export default configureStore({
    reducer:{
        todos:todoReducer,
        meta:metaReducer,
        opcion:opcionReducer
    }

})