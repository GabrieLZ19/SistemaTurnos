import { User } from "../entities/User";

export interface IAppointmentDto {
  date: Date;
  time: number;
  status: "active" | "cancelled";
  user: number;
}
