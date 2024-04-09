import { error } from "console";
import { turnModel, userModel } from "../config/data-source";
import { IAppointmentDto } from "../dtos/IAppointmentDto";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import { obtenerUsuarioIDService } from "./userService";

export const obtenerTurnosService = async (): Promise<Appointment[]> => {
  const turns: Appointment[] = await turnModel.find({
    relations: { userId: true },
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
  const usuario = await userModel.findOneBy({
    id: turno.userId,
  });

  if (!usuario) {
    throw Error("La ID del usuario no existe");
  }

  const newTurn: Appointment = new Appointment();

  (newTurn.date = turno.date),
    (newTurn.status = turno.status),
    (newTurn.time = turno.time),
    (newTurn.userId = usuario);

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
