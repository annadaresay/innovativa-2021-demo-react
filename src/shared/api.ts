import { gql, useMutation, useQuery } from "@apollo/client";
import { TeamEventMean, TeamState } from "./types";

const TEAM_ID = "demoteam"; // Change this to your own team id

// Queries
const teamStateQuery = gql`
  query TeamState($team: String!) {
    teamState(team: $team) {
      state {
        key
        value
      }
    }
  }
`;
export const useTeamState = () => {
  const { data } = useQuery<{ teamState: TeamState }>(teamStateQuery, {
    variables: { team: TEAM_ID },
  });

  return data?.teamState;
};

// Mutations
const addTeamEventMutation = gql`
  mutation AddTeamEvent($input: TeamEventInput) {
    addTeamEvent(input: $input) {
      timestamp
    }
  }
`;
export const useAddTeamEvent = () => {
  const [addTeamEvent] =
    useMutation<{ addTeamEvent: { timestamp: string } }>(addTeamEventMutation);

  return (eventType: string) =>
    addTeamEvent({
      variables: {
        input: {
          team: TEAM_ID,
          type: eventType,
        },
      },
    });
};

// TODO: Change this to a subscription
const teamEventMeanQuery = gql`
  query TeamEventMean($team: String!) {
    teamEventMean(team: $team) {
      type
      value
    }
  }
`;
export const useTeamEventMean = () => {
  const { data } = useQuery<{ teamEventMean: TeamEventMean[] }>(
    teamEventMeanQuery,
    {
      variables: { team: TEAM_ID },
      pollInterval: 1000, // Workaround until we can subscribe
    }
  );

  return data?.teamEventMean;
};
