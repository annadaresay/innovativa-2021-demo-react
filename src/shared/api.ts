import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { TeamEventMean, TeamState } from "./types";

const TEAM_ID = "demoteam"; // Change this to your own team id

// Query example
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
      pollInterval: 1000,
    }
  );

  return data?.teamEventMean;
};

// Mutation example
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

// Query + subscription example
const teamStateQuery = gql`
  query TeamState($team: String!) {
    teamState(team: $team) {
      state {
        value
        key
      }
    }
  }
`;
const teamStateSubscription = gql`
  subscription TeamStateChange($team: String!) {
    teamStateChange(team: $team) {
      state {
        value
        key
      }
    }
  }
`;
export const useTeamState = () => {
  const { data: initial } = useQuery<{ teamState: TeamState }>(teamStateQuery, {
    variables: { team: TEAM_ID },
  });

  const { data: updated } = useSubscription<{ teamStateChange: TeamState }>(
    teamStateSubscription,
    {
      variables: { team: TEAM_ID },
    }
  );

  return updated?.teamStateChange ?? initial?.teamState;
};
