import { useQuery } from "@tanstack/react-query";

export interface ReturnValues {
  word: string;
  entries: [];
  pronunciations: [];
}

export const useWordRequest = () => {
  const url = `https://freedictionaryapi.com/api/v1/entries/en/{word}`;

  const returnWords = useQuery<ReturnValues>({
    queryKey: ["word"],
    queryFn: () => fetch(url).then((response) => response.json()),
  });
  console.log(returnWords);
  return returnWords;
};
