import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Url } from "./Url";

@Entity()
export class Title {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Url, (url) => url.title)
  urls!: Url[];
}
