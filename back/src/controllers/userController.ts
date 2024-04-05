import { Request, Response } from "express";
import {
  crearUsuarioService,
  obtenerUsuarioIDService,
  obtenerUsuariosService,
} from "../services/userService";
import { IUser } from "../interfaces/IUser";
import { IUserDto } from "../dtos/IUserDto";

export const obtenerUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios: IUser[] = await obtenerUsuariosService();
    res.status(200).json(usuarios);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const obtenerUsuarioID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuario: IUser = await obtenerUsuarioIDService(parseInt(id));
    res.status(200).json(usuario);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const registrarUsuario = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password }: IUserDto =
      req.body;

    const usuario: IUser = await crearUsuarioService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });

    res.status(201).json({ message: "Usuario creado", user: usuario });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const loguearUsuario = async (req: Request, res: Response) => {
  try {
    res.send("Se logueo exitosamente");
  } catch (error) {
    res.status(400).json(error);
  }
};
