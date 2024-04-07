import { turnModel } from "../config/data-source";
import { IAppointmentDto } from "../dtos/IAppointmentDto";
import { Turno } from "../entities/Turno";
import { User } from "../entities/User";
import { IAppointment } from "../interfaces/IAppointment";
import { IUser } from "../interfaces/IUser";
import { obtenerUsuarioIDService } from "./userService";

export const obtenerTurnosService = async (): Promise<Turno[]> => {
  const turns: Turno[] = await turnModel.find({
    relations: { user: true },
  });

  if (!turns) {
    throw Error(" Error de la base de datos al buscar turnos");
  } else {
    return turns;
  }
};

export const obtenerTurnoIdService = async (id: number): Promise<Turno> => {
  const turno = await turnModel.findOneBy({ id: id });

  if (!turno) throw Error("No se encontro ningun turno con ese ID");

  return turno;
};

export const crearTurnoService = async (
  turno: IAppointmentDto
): Promise<Turno> => {
  const newTurn = await turnModel.create(turno);

  await turnModel.save(newTurn);

  return newTurn;
};

export const cambiarEstatusTurnoService = async (
  turno: Turno
): Promise<Turno> => {
  if (turno.status === "active") {
    turno.status = "cancelled";
  }

  return turno;
};
