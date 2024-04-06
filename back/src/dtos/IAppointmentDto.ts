export interface IAppointmentDto {
  date: Date;
  time: number;
  userId: number;
  status: "active" | "cancelled";
}
