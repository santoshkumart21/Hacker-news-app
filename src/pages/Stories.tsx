import React from "react";
import Story from "./Story";
import DatafromApi from "../utils/Datafetch";

interface Props {
  type: string;
}
const Stories = (props: Props) => {
  const { isLoading, stories } = DatafromApi(props.type);

  return (
    <div>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          {Object(stories).map(({ data } = stories, id: number) => (
            <Story key={id} contentId={id} story={data} />
          ))}
        </>
      )}
    </div>
  );
};

export default Stories;
