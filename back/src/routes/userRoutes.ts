import { Router } from "express";

import {
  obtenerUsuarios,
  obtenerUsuarioID,
  registrarUsuario,
  loguearUsuario,
} from "../controllers/userController";

const userRoutes: Router = Router();

userRoutes.get("/", obtenerUsuarios);
userRoutes.get("/:id", obtenerUsuarioID);
userRoutes.post("/register", registrarUsuario);
userRoutes.post("/login", loguearUsuario);

export default userRoutes;
