import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "turnos" })
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("date")
  date: Date;

  @Column("integer")
  time: number;

  @Column()
  status: "active" | "cancelled";

  @ManyToOne(() => User, (user) => user.turno)
  userId: User;
}
