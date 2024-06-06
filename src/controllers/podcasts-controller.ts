import { IncomingMessage, ServerResponse } from 'http';

import { serviceListEpisodes } from '../services/list-episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

const defaultContent = {'Content-Type': ContentType.JSON }

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: PodcastTransferModel = await serviceListEpisodes();
    
    res.writeHead(content.statusCode, defaultContent); // (status, propriedade)
    res.write(JSON.stringify(content.body))
    res.end();      // converte ficheiro JSON em string para o servidor conseguir ler o conteúdo   
};


export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);
    
    res.writeHead(content.statusCode, defaultContent); // (status, propriedade)
    res.write(JSON.stringify(content.body))
    
    res.end();
}