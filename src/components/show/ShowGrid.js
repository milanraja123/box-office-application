import React from 'react';
import ShowCard from './ShowCard';
import { FlexGrid } from '../styled';
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { useShows } from '../../misc/custom-hooks';

function ShowGrid({ data }) {
  const [starredShows, dispatchStarred] = useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = () => {
          console.log(isStarred);
          if (isStarred) {
            dispatchStarred({ type: 'ADD', showID: show.id });
          } else {
            dispatchStarred({ type: 'REMOVE', showID: show.id });
          }
        };

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
}

export default ShowGrid;
