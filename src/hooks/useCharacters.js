import { useQuery, gql } from "@apollo/client";

// typically in uppercase snake case
const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        name
        image
      }
    }
  }
`;

export const useCharacters = () => {
  // query hook
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  return { error, data, loading };
};
