import Item from "./item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleOnAdd={() => console.log(`${item} bought`)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
