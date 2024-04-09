export interface IAppointmentDto {
  date: Date;
  time: number;
  status: "active" | "cancelled";
  userId: number;
}
