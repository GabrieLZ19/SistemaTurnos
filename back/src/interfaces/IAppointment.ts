import { IUser } from "./IUser";

enum status {
  active,
  cancelled,
}

export interface IAppointment {
  id: number;
  date: Date;
  time: number;
  userId: IUser;
  status: status;
}
