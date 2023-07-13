import React, { useEffect, useState } from "react";
import "./App.css";

import InputComponent from "./InputComponent";
import FilterComponent from "./FilterComponent";
import ListComponent from "./ListComponent";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     setTodoItems([
  //       { id: 1, title: 'あああ', is_done: false },
  //       { id: 2, title: 'いいい', is_done: true },
  //       { id: 3, title: 'ううう', is_done: false },
  //       { id: 4, title: 'えええ', is_done: true },
  //       { id: 5, title: 'おおお', is_done: false },
  //     ])
  //   })()
  // }, [])

  // 更新用のメソッドを作っておきコンポーネントに渡す
  const addTodoItem = (title) => {
    setTodoItems([
      ...todoItems,
      { id: todoItems.length + 1, title: title, is_done: false },
    ]);
  };

  return (
    <div>
      <InputComponent addTodoItem={addTodoItem} />
      <FilterComponent />
      <ListComponent todoItems={todoItems} />
    </div>
  );
}
