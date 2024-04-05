import { IAppointment } from "../interfaces/IAppointment";

const turnos: IAppointment[] = [];
let turnoID: number = 1;

export const obtenerTurnosService = async (): Promise<IAppointment[]> => {
  return turnos;
};

export const obtenerTurnoIdService = async (
  id: number
): Promise<IAppointment | undefined> => {
  return turnos.find((elemento) => elemento.id === id);
};

export const crearTurnoService = async (
  turn: Omit<IAppointment, "id">
): Promise<IAppointment> => {
  const id: number = turnoID++;

  const turno: IAppointment = {
    id,
    date: turn.date,
    time: turn.time,
    userId: turn.userId,
    status: turn.status,
  };

  turnos.push(turno);

  return turno;
};
