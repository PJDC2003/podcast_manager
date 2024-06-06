import fs from "fs"  // Node.js file system module to read/write files
import path from "path"  // Node.js path module to work with file paths

import { PodcastModel } from "../models/podcast-model";

// Define the file path to store the podcasts data
const pathData = path.join(__dirname, "../repositories/podcasts.json");   //dirname is the directory name of the current module

export const repositoryPodcasts = async ( podcastName?: string): Promise<PodcastModel[]> => {    //podcastName variable is optional
  
  const language = "utf-8";
  // Read the podcasts data from the file
  const rawData = fs.readFileSync(pathData, language);
  let jsonFile = JSON.parse(rawData);

  if(podcastName) {   // If the podcastName is provided
    // Filter the podcasts data by the podcast name
    jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
  }

  return jsonFile;
}