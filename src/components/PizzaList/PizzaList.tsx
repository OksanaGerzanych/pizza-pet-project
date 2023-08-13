import PizzaCard from "../PizzaCard/PizzaCard";
import { ListPizza } from "../PizzaList/PizzaList.styled";
import { pizzas } from "../../pizza.json";

export default function PizzaList() {
  return (
    <ListPizza>
      {pizzas.map((pizza, id) => (
        <PizzaCard
          key={pizza.id}
          title={pizza.name}
          price={pizza.price}
          image={pizza.imageUrl}
          sizes={pizza.sizes}
          types={pizza.types}
        />
      ))}
    </ListPizza>
  );
}
