import { createSlice } from "@reduxjs/toolkit";

// const initialStateAppoinments = {
//   turnos: [],
// };

const initialState = {
  Login: false,
  user: [],
};

export const sesionSlices = createSlice({
  name: "SesionUsuario",
  initialState,
  reducers: {
    sesionIniciada: (state, action) => {
      state.Login = true;

      state.user = state.user.concat(action.payload);
    },

    sesionCerrada: (state) => {
      state.Login = false;
      state.user = [];
    },
  },
});

export const { sesionIniciada, sesionCerrada } = sesionSlices.actions;
