import { createSlice } from "@reduxjs/toolkit";

export const opcionSlice = createSlice({
  name: "opcion",
  initialState: {
    value: localStorage.getItem("opcionValue") || "tareas",
  },
  reducers: {
    cambiarOpcion: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("opcionValue", action.payload);
    },
  },
});

export const { cambiarOpcion } = opcionSlice.actions;
export const selectOpcion = (state) => state.opcion.value;
export default opcionSlice.reducer;
