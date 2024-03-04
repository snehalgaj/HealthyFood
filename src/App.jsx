import "./App.css";
import Container from "./components/Container";
import FoodItems from "./components/FoodItems";

function App() {
  const foodItems = [
    "Sabzi",
    "Rice",
    "Salad",
    "Milk",
    "Boiled Egg",
    "Chiken",
    "Green veggies",
  ];
  return (
    <Container>
      <h1
        className="food-Heading"
        style={{ color: "brown", textAlign: "center " }}
      >
        Healthy Food
      </h1>
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
