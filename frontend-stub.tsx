// Frontend en React + TypeScript

import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Contador: {count}</button>;
}

export default App;
