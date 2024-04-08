import { turnModel } from "../config/data-source";
import { IAppointmentDto } from "../dtos/IAppointmentDto";
import { Appointment } from "../entities/Turno";
import { User } from "../entities/User";
import { obtenerUsuarioIDService } from "./userService";

export const obtenerTurnosService = async (): Promise<Appointment[]> => {
  const turns: Appointment[] = await turnModel.find({
    relations: { user: true },
  });

  if (!turns) {
    throw Error(" Error de la base de datos al buscar turnos");
  } else {
    return turns;
  }
};

export const obtenerTurnoIdService = async (
  id: number
): Promise<Appointment> => {
  const turno = await turnModel.findOneBy({ id: id });

  if (!turno) throw Error("No se encontro ningun turno con ese ID");

  return turno;
};

export const crearTurnoService = async (
  turno: IAppointmentDto
): Promise<Appointment> => {
  const usuario: User = await obtenerUsuarioIDService(turno.user);

  const newTurn: Appointment = new Appointment();

  (newTurn.date = turno.date),
    (newTurn.status = turno.status),
    (newTurn.time = turno.time),
    (newTurn.user = usuario);

  const dbTurno = await turnModel.create(newTurn);

  await turnModel.save(dbTurno);

  return dbTurno;
};

export const cambiarEstatusTurnoService = async (
  turno: Appointment
): Promise<Appointment> => {
  if (turno.status === "active") {
    turno.status = "cancelled";
  } else {
    throw Error("El Status ya es Cancelled");
  }
  const turnoModificado = await turnModel.create(turno);

  await turnModel.save(turnoModificado);

  return turnoModificado;
};
