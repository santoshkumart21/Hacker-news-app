import { useState, useEffect } from "react";
import { getStories } from "./getdata";

const DatafromApi = (type: string) => {
  const [stories, setStories] = useState<unknown>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories(type)
      .then((story: unknown): void | Promise<unknown> => {
        setStories(story);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);
  return { isLoading, stories };
};

export default DatafromApi;
