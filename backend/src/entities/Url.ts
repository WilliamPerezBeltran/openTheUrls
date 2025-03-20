import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Title } from "./Title";

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  url!: string;

  @ManyToOne(() => Title, (title) => title.urls)
  title!: Title;
}
