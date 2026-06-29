import { useState } from "react";
import "./App.css";
import { useWordRequest } from "./components/api/useWordRequest";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";

interface Entry {
  senses: Array<{
    definition: string;
  }>;
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

  if (!data && isLoading && searchWord) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return (
    <div>
      <Header />
      <SearchBar onSearch={setSearchWord} />
      <div>
        <h3>Results for {searchWord}</h3>
        {data &&
          data.entries.slice(0, 1).map((item: Entry, index: number) => (
            <div key={index}>
              <p>{item.word}</p>
              <p> Pronunciation: {item.pronunciations?.[0]?.text}</p>
              <p> Definition: {item.senses?.[0]?.definition}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
