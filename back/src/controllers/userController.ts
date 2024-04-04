import { Request, Response } from "express";

export const obtenerUsuarios = async (req: Request, res: Response) => {
  try {
    res.send("Obtener el listado de todos los usuarios.");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const obtenerUsuarioID = async (req: Request, res: Response) => {
  try {
    res.send("Obtener el detalle de un usuario específico");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const registrarUsuario = async (req: Request, res: Response) => {
  try {
    res.send("Se registro un nuevo usuario");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loguearUsuario = async (req: Request, res: Response) => {
  try {
    res.send("Se logueo exitosamente");
  } catch (error) {
    res.status(500).json(error);
  }
};
