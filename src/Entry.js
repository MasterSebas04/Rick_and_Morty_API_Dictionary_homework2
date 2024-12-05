import { useState } from "react";

export default function Entry({ id_number }) {
  const [content, setContent] = useState("");

  function submit(e) {
    e.preventDefault();
    id_number(content);
    setContent("");
  }

  return (
    <form onSubmit={submit}>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
    </form>
  );
}
