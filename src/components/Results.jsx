import React from "react";
import Masonry from "react-masonry-css";
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

export default ({ gifs }) => (
  <>
    <h2>Results</h2>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {gifs.map(mygif => {
        console.log(mygif);
        return (
          <a
            href={mygif.url}
            key={mygif.id}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={mygif.media[0].gif.url}
              alt={mygif.name}
              id={mygif.id}
              className="item"
            />
          </a>
        );
      })}
    </Masonry>
  </>
);
