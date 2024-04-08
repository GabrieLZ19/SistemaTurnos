import { turnModel } from "../config/data-source";
import { IAppointmentDto } from "../dtos/IAppointmentDto";
import { Appointment } from "../entities/Turno";

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
  const newTurn = await turnModel.create(turno);

  await turnModel.save(newTurn);

  return newTurn;
};

export const cambiarEstatusTurnoService = async (
  turno: Appointment
): Promise<Appointment> => {
  if (turno.status === "active") {
    turno.status = "cancelled";
  }

  return turno;
};
