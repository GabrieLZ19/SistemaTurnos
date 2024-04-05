import { Request, Response } from "express";
import { IAppointment } from "../interfaces/IAppointment";
import {
  crearTurnoService,
  obtenerTurnoIdService,
  obtenerTurnosService,
} from "../services/appointmentService";
import { crearUsuarioService } from "../services/userService";

export const obtenerTurnos = async (req: Request, res: Response) => {
  try {
    const turnos: IAppointment[] = await obtenerTurnosService();
    res.status(200).json(turnos);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const obtenerTurnoEspecifico = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const turno = await obtenerTurnoIdService(parseInt(id));

    res.status(200).json(turno);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const agendarTurno = async (req: Request, res: Response) => {
  try {
    const { date, time, userId, status } = req.body;

    const user = crearUsuarioService(userId);

    const BDturno: IAppointment = await crearTurnoService({
      date,
      time,
      userId,
      status,
    });

    res.status(201).json({ message: "Turno creado", user: BDturno });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const cambiarEstatusTurno = async (req: Request, res: Response) => {
  try {
    res.send("Se cambio el estatus de un turno a “cancelled”");
  } catch (error) {
    res.status(500).json(error);
  }
};
