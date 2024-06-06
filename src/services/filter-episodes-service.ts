import { repositoryPodcasts } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    //busca os dados
    const queryString = podcastName?.split("?p=")[1] || "";  // separa a url em duas partes: antes e depois do ponto de interrogação //http://localhost:3636/api/episode?p=flow
    const data = await repositoryPodcasts(queryString);

    //verifica se tem conteúdo
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    responseFormat.body = data;

    return responseFormat;
}