import { useState } from "react";
import "./App.css";
import { useWordRequest } from "./components/api/useWordRequest";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";

interface Entry {
  word: string;
  language?: object;
  synonyms: string[];
  partOfSpeech: string;
  pronunciations: Array<{
    tags: string;
    text: string;
    type: string;
  }>;
}

const App = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const { isLoading, data } = useWordRequest(searchWord);

  // const firstPronunciation =
  //   (data?.entries as Entry[] | undefined)?.[0].pronunciations?.[0] ?? null;

  if (!data && isLoading && searchWord) {
    return <p>Loading...</p>;
  }

  console.log("this is the data", data?.entries);
  // Add more detailed logging to understand the structure
  console.log("first entry:", data?.entries);

  return (
    <div>
      <Header />
      <SearchBar onSearch={setSearchWord} />
      {/* {isLoading && searchWord && <p> Loading ...</p>} */}
      {/* {error && <p>Error: Could not find word</p>} */}

      <div>
        <h3>Results for {searchWord}</h3>
        {data &&
          data.entries.slice(0, 1).map((item: Entry, index: number) => (
            <div key={index}>
              <p>{item.word}</p>
              <p>{item.pronunciations?.[0]?.text}</p>

              {/* <p>{item.entries[0]?.partOfSpeech}</p> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
