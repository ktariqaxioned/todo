import { useState } from "react";
import "./App.css";
import { Input } from "./components/input";
import { List } from "./components/list";

function App() {
  return (
    <div className="todo">
      <Input />
      <List />
    </div>
  );
}

export default App;
