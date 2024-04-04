import { Router } from "express";

import {
  obtenerUsuarios,
  obtenerUsuarioID,
  registrarUsuario,
  loguearUsuario,
} from "../controllers/userController";

const userRoutes: Router = Router();

userRoutes.get("/", obtenerUsuarios);
userRoutes.post("/register", registrarUsuario);
userRoutes.post("/login", loguearUsuario);
userRoutes.get("/:id", obtenerUsuarioID);

export default userRoutes;
