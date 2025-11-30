import "./App.css";
import { useWordRequest } from "./components/api/useWordRequest";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";

interface ReturnValues {
  word: string;
  entries: [];
  pronunciations: [];
}

function App() {
  const { data, error, isLoading } = useWordRequest();

  if (!data && isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>This is an error</p>;
  }
  console.log(data);

  return (
    <div>
      <Header />
      <SearchBar />
      {data &&
        data.entries.map((item: ReturnValues) => (
          <p key={item.word}>{item.word}</p>
        ))}
    </div>
  );
}

export default App;
