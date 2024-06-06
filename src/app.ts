import * as http from "http";

import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";

import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    
    // queryString --> texto para consulta, que vem após o ponto de interrogação da url
    const baseUrl = request.url?.split("?")[0];  // separa a url em duas partes: antes e depois do ponto de interrogação

    // lista de episódios
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) {    // rota
        await getListEpisodes(request, response);
    }

    // filtrar episódios
    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }

}