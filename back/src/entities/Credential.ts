import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "credenciales" })
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  username: string;

  @Column({ length: 100 })
  password: string;
}
