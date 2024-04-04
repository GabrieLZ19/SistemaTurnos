import { Router } from "express";
import appointmentRoutes from "./appointmentRoutes";
import userRoutes from "./userRoutes";

const router: Router = Router();

router.use("/users", userRoutes);

router.use("/appointments", appointmentRoutes);

export default router;
