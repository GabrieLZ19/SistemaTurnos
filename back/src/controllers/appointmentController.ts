import { Request, Response } from "express";

export const obtenerTurnos = async (req: Request, res: Response) => {
  try {
    res.send("Obtener el listado de todos los turnos de todos los usuarios");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const obtenerTurnoEspecifico = async (req: Request, res: Response) => {
  try {
    res.send("Obtener el detalle de un turno específico");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const agendarTurno = async (req: Request, res: Response) => {
  try {
    res.send("Agendar un nuevo turno");
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
