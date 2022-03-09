export default function Item({ children, deleteItem, id }) {
  return (
    <div className="item">
      {children}
      <button
        className="remove"
        onClick={() => deleteItem((preArr) => preArr.filter((item) => item.id !== id))}
      >
        刪除
      </button>
    </div>
  );
}
