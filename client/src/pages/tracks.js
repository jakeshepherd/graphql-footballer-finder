import React from 'react';
import { Layout } from '../components';
import {useQuery, gql} from '@apollo/client';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

export const NEYMAR = gql`
  # Query goes here
  query getNeymar {
    player {
      name
      photo
    }
  }
`;


export const TOP_SCORERS = gql`
  # Query goes here
  query getTopScorers {
    topScorers {
      name
      photo
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
    const {loading, error, data} = useQuery(TOP_SCORERS);
  return (<Layout grid>
        <QueryResult error={error} loading={loading} data={data}>
        {data?.topScorers?.map((player, key) => (
            <TrackCard key={key} player={player} />
        ))}
                {/* <TrackCard player={data} /> */}

        </QueryResult>
    </Layout>
);
};

export default Tracks;
