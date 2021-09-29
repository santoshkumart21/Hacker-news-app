import { baseUrl } from "./constants";
import axios from "axios";

export const getStory = async (id: number) => {
  try {
    const response = await axios.get(baseUrl + "item/" + id + ".json");
    return response;
  } catch (error) {
    return error;
  }
};

export const getStories = async (type: string) => {
  try {
    const { data: storyIds } = await axios.get(baseUrl + type + "stories.json");
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
    return error;
  }
};
