import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  # wih variable (specify operation name also)
  # ID! -> required
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      gender
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
  // query hook
  //provide options inside 2nd arg of useQuery to specify variables
  const { error, data, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });
  return { error, data, loading };
};
