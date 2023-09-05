import { useState } from "react";
//import pizza from '../../img/pizza-d.png';
import {
  CardPizza,
  ListSize,
  ContainerChoosePizza,
  NamePizza,
  ContainerAddPizza,
  Price,
  Item,
  AddButton,
  ItemSize,
} from "../PizzaCard/PizzaCard.styled";

export default function PizzaCard({ title, price, image, sizes, types }) {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [choosedType, setChoosedType] = useState(0);
  const [choosedSize, setChoosedSize] = useState(0);

  const AddPizza = () => {
    setPizzaCount(pizzaCount + 1);
  };

  const activeType = (index) => {
    setChoosedType(index);
  }
  const activeSize = (index) => { 
    setChoosedSize(index);
  }
  const typeName = ['classic', 'gluten free']
  return (
    <CardPizza>
      <img src={image} alt="pizza" width="260px" />
      <NamePizza>{title}</NamePizza>
      <ContainerChoosePizza>
        <ListSize>
          {types.map((type, i) => (<Item key={type} active={choosedType === type} onClick={() =>activeType(type)}>{typeName[type]}</Item>))}
          
        </ListSize>
        <ListSize>
          {sizes.map((size, i) => (
            <ItemSize key={i} active={choosedSize === i} onClick={()=>activeSize(i)}>{size} cm.</ItemSize>
          ))}
        </ListSize>
      </ContainerChoosePizza>
      <ContainerAddPizza>
       
        <Price>from {price}UAH</Price>
        <AddButton type="submit" onClick={AddPizza}>
          
          + Add
          <span> {pizzaCount}</span>
        </AddButton>
      </ContainerAddPizza>
    </CardPizza>
  );
}
