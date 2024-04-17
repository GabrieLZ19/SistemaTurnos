import { createSlice } from "@reduxjs/toolkit";

// const initialStateAppoinments = {
//   turnos: [],
// };

const initialState = {
  user: {},
};

export const sesionSlices = createSlice({
  name: "SesionUsuario",
  initialState: initialState,
  reducers: {
    sesionIniciada: (state, action) => {
      state.user = action.payload;
    },

    sesionCerrada: (state) => {
      state.Login = false;
      state.user = [];
    },
  },
});

export const { sesionIniciada, sesionCerrada } = sesionSlices.actions;
