import server from "./server";
import { PORT } from "./config/envs";

server.listen(PORT, () => {
  console.log(`El server esta en el puerto ${PORT}`);
});
