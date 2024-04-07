import { Request, Response } from "express";
import { IAppointment } from "../interfaces/IAppointment";
import {
  cambiarEstatusTurnoService,
  crearTurnoService,
  obtenerTurnoIdService,
  obtenerTurnosService,
} from "../services/appointmentService";
import { IAppointmentDto } from "../dtos/IAppointmentDto";
import { Turno } from "../entities/Turno";
import { User } from "../entities/User";
import { obtenerUsuarioIDService } from "../services/userService";

export const obtenerTurnos = async (req: Request, res: Response) => {
  try {
    const turnos: Turno[] = await obtenerTurnosService();
    res.status(200).json(turnos);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const obtenerTurnoEspecifico = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const turno: Turno = await obtenerTurnoIdService(parseInt(id));

    res.status(200).json(turno);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const agendarTurno = async (req: Request, res: Response) => {
  try {
    const { date, time, status, user }: IAppointmentDto = req.body;

    const usuario: User = await obtenerUsuarioIDService(user.id);

    const BDturno: Turno = await crearTurnoService({
      date,
      time,
      status,
      user: usuario,
    });

    res.status(201).json({ message: "Turno creado", turno: BDturno });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const cambiarEstatusTurno = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const turnoEncontrado: Turno = await obtenerTurnoIdService(id);

    const turnoModificado: Turno = await cambiarEstatusTurnoService(
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
