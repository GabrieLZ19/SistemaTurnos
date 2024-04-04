import { Router } from "express";

import {
  obtenerTurnos,
  obtenerTurnoEspecifico,
  agendarTurno,
  cambiarEstatusTurno,
} from "../controllers/appointmentController";

const appointmentRoutes: Router = Router();

appointmentRoutes.get("/", obtenerTurnos);
appointmentRoutes.get("/appointment", obtenerTurnoEspecifico);
appointmentRoutes.post("/appointment/schedule", agendarTurno);
appointmentRoutes.post("/appointment/cancel", cambiarEstatusTurno);

export default appointmentRoutes;
