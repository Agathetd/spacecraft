import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch("https://swapi.py4e.com/api/starships/");
  const json = await result.json();
  return json;
}

export function useStarships() {
  const { isLoading, isError, data } = useQuery(["starships"], fetchData);

  return {
    isLoading,
    isError,
    data,
  };
}
