import { createSlice } from "@reduxjs/toolkit";

// const initialStateAppoinments = {
//   turnos: [],
// };

const initialState = {
  user: {},
  appointments: [],
};

export const sesionSlices = createSlice({
  name: "SesionUsuario",
  initialState: initialState,
  reducers: {
    sesionIniciada: (state, action) => {
      state.user = action.payload;
    },

    sesionCerrada: (state) => {
      state.user = {};
    },

    setAppointments: (state, action) => {
      state.appointments = action.payload;
    },

    cancelAppointments: (state, action) => {
      state.appointments = state.appointments.map((turno) => {
        if (turno.id === action.payload) {
          return { ...turno, status: "cancelled" };
        }

        return turno;
      });
    },
  },
});

export const {
  sesionIniciada,
  sesionCerrada,
  setAppointments,
  cancelAppointments,
} = sesionSlices.actions;
