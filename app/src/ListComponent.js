import styles from "./ListComponent.css";

// props.todoItems とするとデータの受け渡しができます。ただし読み取り専用です。
export default function ListComponent(props) {
  return (
    <div>
      <ul>
        {/* mapを使用して繰り返し表示 */}
        {props.todoItems.map((todoItem) => (
          <li key={todoItem.id}>
            <span>{todoItem.title}</span>
            <span>
              <input type="checkbox" checked={todoItem.is_done} />
            </span>
            <span>
              <button>削除</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
