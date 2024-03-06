import styles from "./item.module.css";

const Item = ({ foodItem, handleOnAdd }) => {
  return (
    <li key={foodItem} className="list-group-item kg-item ">
      {foodItem}
      <button className={`${styles.button} btn btn-info`} onClick={handleOnAdd}>
        Add
      </button>
    </li>
  );
};
export default Item;
