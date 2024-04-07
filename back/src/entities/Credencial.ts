import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Credenciales" })
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 })
  password: string;
}
