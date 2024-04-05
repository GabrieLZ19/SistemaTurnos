import { Request, Response } from "express";
import {
  crearUsuarioService,
  obtenerUsuarioIDService,
  obtenerUsuariosService,
} from "../services/userService";
import { IUser } from "../interfaces/IUser";
import { crearCredencial } from "../services/credentialService";

export const obtenerUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios: IUser[] = await obtenerUsuariosService();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const obtenerUsuarioID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuario = await obtenerUsuarioIDService(parseInt(id));

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const registrarUsuario = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;

    const credential = crearCredencial(username, password);

    const BDusuario: IUser = await crearUsuarioService({
      name,
      email,
      birthdate,
      nDni,
      credentialId: credential,
    });

    res.status(201).json({ message: "Usuario creado", user: BDusuario });
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
