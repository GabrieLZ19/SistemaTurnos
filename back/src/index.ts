import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";

import { AppDataSource } from "./config/data-source";

AppDataSource.initialize().then((res) => {
  console.log("Conexion a la base de datos exitosa");
  server.listen(PORT, () => {
    console.log(`El server esta en el puerto ${PORT}`);
  });
});
