import "reflect-metadata";

import { AppDataSource } from "../data-source";

AppDataSource.initialize()
.then(async()=>{
	console.log(`conecta exitosamente a la db`);
	await AppDataSource.synchronize()
	console.log(`Tablas sincronizadas`);
	process.exit(0);

})
.catch((err)=>{
	console.log(`Error al conectar al database `,err);
	process.exit(1);
})
