import { Request, Response } from "express";
import { IAppointment } from "../interfaces/IAppointment";
import {
  cambiarEstatusTurnoService,
  crearTurnoService,
  obtenerTurnoIdService,
  obtenerTurnosService,
} from "../services/appointmentService";
import { IAppointmentDto } from "../dtos/IAppointmentDto";
import { Appointment } from "../entities/Appointment";

export const obtenerTurnos = async (req: Request, res: Response) => {
  try {
    const turnos: Appointment[] = await obtenerTurnosService();
    res.status(200).json(turnos);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const obtenerTurnoEspecifico = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const turno: Appointment = await obtenerTurnoIdService(parseInt(id));

    res.status(200).json(turno);
  } catch (error: any) {
    res.status(404).json({ message: "El turno especificado no existe" });
  }
};

export const agendarTurno = async (req: Request, res: Response) => {
  try {
    const { date, time, status, userId }: IAppointmentDto = req.body;

    if (userId == null) {
      throw Error("ingrese el user id");
    }

    const BDturno: Appointment = await crearTurnoService({
      date,
      time,
      status,
      userId,
    });

    res.status(201).json({ message: "Turno creado", turno: BDturno });
  } catch (error: any) {
    res.status(400).json({ message: "Datos incorrectos" });
  }
};

export const cambiarEstatusTurno = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const turnoEncontrado: Appointment = await obtenerTurnoIdService(id);

    const turnoModificado: Appointment = await cambiarEstatusTurnoService(
      turnoEncontrado
    );

    res.status(200).json({
      message: "Estatus del turno modificado",
      turno: turnoModificado,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
