import { useState } from "react";
import { useSelector } from "react-redux";
import TodoCard from "./todo-card";

export const List = () => {
  const [category, setCategory] = useState("active");
  const [visibleCategory, setVisibleCategory] = useState("active");
  const [isExiting, setIsExiting] = useState(false);
  const data = useSelector((state) => state.todo.todos);

  const handleCategoryChange = (newCategory) => {
    if (newCategory === category) return;

    setIsExiting(true);

    setTimeout(() => {
      setCategory(newCategory);
      setVisibleCategory(newCategory);
      setIsExiting(false);
    }, 300);
  };

  const filteredData =
    visibleCategory === "all"
      ? data
      : data.filter((todo) =>
          visibleCategory === "completed" ? todo.completed : !todo.completed
        );

  return (
    <div>
      <div className="category">
        <button onClick={() => handleCategoryChange("active")}>Active</button>
        <button onClick={() => handleCategoryChange("completed")}>
          Completed
        </button>
        <button onClick={() => handleCategoryChange("all")}>All</button>
      </div>

      <ul className={`list ${isExiting ? "slide-out" : "slide-in"}`}>
        {filteredData.map((item) => (
          <li key={item.id}>
            <TodoCard data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
