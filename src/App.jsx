import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import FoodItems from "./components/FoodItems";
import Foodinput from "./components/Foodinput";

function App() {
  let [foodItems, setFoodItems] = useState(["GreenVeggies", "Rice", "Roti"]);
  let [textToShow, setTextToShow] = useState("Food item Enter by user");

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(newFoodItem);
    }
  };
  return (
    <Container>
      <h1
        className="food-Heading"
        style={{ color: "brown", textAlign: "center " }}
      >
        Healthy Food
      </h1>
      <Foodinput handleKeyDown={onKeyDown} />
      <p>{textToShow}</p>
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
