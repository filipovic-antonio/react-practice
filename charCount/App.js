import { useState } from "react";

function CharacterCount() {
  const [text, setText] = useState("");
  const handleChar = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>Character Count</h1>
      <input
        type="text"
        value={text}
        onChange={handleChar}
        placeholder="Write something here..."
      ></input>
      <p>Character count: {text.length}</p>
    </div>
  );
}

export default CharacterCount;
