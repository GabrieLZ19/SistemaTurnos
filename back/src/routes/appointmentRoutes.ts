import { Router } from "express";

import {
  obtenerTurnos,
  obtenerTurnoEspecifico,
  agendarTurno,
  cambiarEstatusTurno,
} from "../controllers/appointmentController";

const appointmentRoutes: Router = Router();

appointmentRoutes.get("/", obtenerTurnos);
appointmentRoutes.get("/:id", obtenerTurnoEspecifico);
appointmentRoutes.post("/schedule", agendarTurno);
appointmentRoutes.post("/cancel", cambiarEstatusTurno);

export default appointmentRoutes;
