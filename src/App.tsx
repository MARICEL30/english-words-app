import "./App.css";
import {
  useWordRequest,
  type ReturnValues,
} from "./components/api/useWordRequest";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";

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
      {data &&
        data.entries.map((item: ReturnValues) => (
          <p key={item.word}>{item.word}</p>
        ))}
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
