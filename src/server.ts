import * as http from "http";
import { app } from "./app";

// req - request;   res - response

const server = http.createServer(app);

// server.listen(3333, () => {     // cria um servidor na porta 3333
//     console.log("servidor iniciado na porta 3333")
// })  // inicia o servidor: tsx src/server.ts

const port = process.env.PORT;   // usando variável de ambiente

server.listen(port, () => {     // guarda a porta numa variável de ambiente
    console.log(`servidor iniciado na porta ${port}`)
});   // inicia o servidor: tsx --env-file=.env src/server.ts
// para visualizar o servidor abrir o browser e escrever localhost:PORT