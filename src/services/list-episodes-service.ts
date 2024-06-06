import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    const data = await repositoryPodcasts();

    let responseFormat: PodcastTransferModel = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    };

    return responseFormat;
};