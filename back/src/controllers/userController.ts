import { Request, Response } from "express";
import {
  crearUsuarioService,
  loginUsuarioService,
  obtenerUsuarioIDService,
  obtenerUsuariosService,
} from "../services/userService";

import { User } from "../entities/User";
import { ICredentialDto } from "../dtos/ICredentialDto";

export const obtenerUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios: User[] = await obtenerUsuariosService();
    res.status(200).json(usuarios);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const obtenerUsuarioID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuario: User = await obtenerUsuarioIDService(parseInt(id));
    res.status(200).json(usuario);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const registrarUsuario = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;

    const usuario: User = await crearUsuarioService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });

    res.status(201).json({ message: "Usuario creado", user: usuario });
  } catch (error) {
    res.status(400).json({ message: "Datos incorrectos" });
  }
};

export const loguearUsuario = async (req: Request, res: Response) => {
  try {
    const { username, password }: ICredentialDto = req.body;

    const usuario: User = await loginUsuarioService({ username, password });

    res.status(200).json({ login: true, user: usuario });
  } catch (error) {
    res.status(400).json({ message: "Credenciales invalidas" });
  }
};
