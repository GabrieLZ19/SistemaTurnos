import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "turnos" })
export class Turno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("date")
  date: Date;

  @Column("integer")
  time: number;

  @Column()
  status: "active" | "cancelled";

  @ManyToOne(() => User, (user) => user.turno)
  user: User;
}
