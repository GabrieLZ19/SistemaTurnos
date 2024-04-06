import { Request, Response } from "express";
import { IAppointment } from "../interfaces/IAppointment";
import {
  cambiarEstatusTurnoService,
  crearTurnoService,
  obtenerTurnoIdService,
  obtenerTurnosService,
} from "../services/appointmentService";
import { crearUsuarioService } from "../services/userService";
import { IAppointmentDto } from "../dtos/IAppointmentDto";

export const obtenerTurnos = async (req: Request, res: Response) => {
  try {
    const turnos: IAppointment[] = await obtenerTurnosService();
    res.status(200).json(turnos);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const obtenerTurnoEspecifico = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const turno: IAppointment = await obtenerTurnoIdService(parseInt(id));

    res.status(200).json(turno);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const agendarTurno = async (req: Request, res: Response) => {
  try {
    const { date, time, userId, status }: IAppointmentDto = req.body;

    const BDturno: IAppointment = await crearTurnoService({
      date,
      time,
      userId,
      status,
    });

    res.status(201).json({ message: "Turno creado", turno: BDturno });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const cambiarEstatusTurno = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const turnoEncontrado: IAppointment = await obtenerTurnoIdService(id);

    const turnoModificado: IAppointment = await cambiarEstatusTurnoService(
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
