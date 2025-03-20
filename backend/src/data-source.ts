import "reflect-metadata";
import { DataSource } from "typeorm";
import { Title } from "./entities/Title";
import { Url } from "./entities/Url";

// export const AppDataSource = new DataSource({
//   type: "sqlite",
//   database: "database.sqlite",
//   synchronize: true,
//   logging: false,
//   entities: [Title, Url],
// });

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:", // Usa una DB en memoria para evitar conflictos
  synchronize: true,
  logging: false,
  entities: [Title, Url],
});
