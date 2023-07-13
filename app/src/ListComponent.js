import styles from "./ListComponent.css";

// props.todoItems とするとデータの受け渡しができます。ただし読み取り専用です。
export default function ListComponent(props) {
  return (
    <div>
      <ul>
        {/* mapを使用して繰り返し表示 */}
        {props.todoItems.map((todoItem) => {
          if (props.filterStatus === 1 && !todoItem.is_done) {
            return false;
          }
          if (props.filterStatus === 2 && todoItem.is_done) {
            return false;
          }
          return (
            <li key={todoItem.id}>
              <span>{todoItem.title}</span>
              <span>
                <input
                  type="checkbox"
                  checked={todoItem.is_done}
                  onChange={(e) => {
                    props.updateStatusTodoItem(todoItem.id);
                  }}
                />
              </span>
              <span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    props.removeTodoItem(todoItem.id);
                  }}
                >
                  削除
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
