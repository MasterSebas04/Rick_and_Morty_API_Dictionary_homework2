import { useState, useEffect } from "react";
import Title from "./Title";
import Entry from "./Entry";
import Info from "./Info";

import "./styles.css";

export default function App() {
  const [number, setName] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const number_encode = encodeURIComponent(number);
    const url = `https://rickandmortyapi.com/api/character/?name=${number_encode}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r.results[0]))

      .catch((e) => setData(`${e}`));
  }, [number]);

  return (
    <div className="App">
      <Title title="Rick and Morty Characters" />

      <Entry id_number={setName} />
      <Info data={data} />
    </div>
  );
}
