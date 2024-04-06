import { IAppointmentDto } from "../dtos/IAppointmentDto";
import { IAppointment } from "../interfaces/IAppointment";
import { IUser } from "../interfaces/IUser";
import { obtenerUsuarioIDService } from "./userService";

const turnos: IAppointment[] = [];
let turnoID: number = 1;

export const obtenerTurnosService = async (): Promise<IAppointment[]> => {
  const turns: IAppointment[] = turnos;

  if (!turns) {
    throw Error(" Error de la base de datos al buscar turnos");
  } else {
    return turns;
  }
};

export const obtenerTurnoIdService = async (
  id: number
): Promise<IAppointment> => {
  const turnoEncontrado: IAppointment | undefined = turnos.find(
    (turn) => turn.id === id
  );

  if (!turnoEncontrado) throw Error("No se encontro ningun turno con ese ID");

  return turnoEncontrado;
};

export const crearTurnoService = async (
  params: IAppointmentDto
): Promise<IAppointment> => {
  const usuario: IUser = await obtenerUsuarioIDService(params.userId);

  const turn: IAppointment = {
    id: turnoID++,
    date: params.date,
    time: params.time,
    userId: usuario.id,
    status: params.status,
  };

  turnos.push(turn);

  return turn;
};

export const cambiarEstatusTurnoService = async (
  turno: IAppointment
): Promise<IAppointment> => {
  if (turno.status === "active") {
    turno.status = "cancelled";
  }

  return turno;
};
