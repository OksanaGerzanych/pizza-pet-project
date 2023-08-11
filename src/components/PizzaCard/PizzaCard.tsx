import { useState } from 'react';
import pizza from '../../img/pizza-d.png';
import {CardPizza, ListSize, ContainerChoosePizza, NamePizza, ContainerAddPizza, Price, Item,  AddButton} from '../PizzaCard/PizzaCard.styled'


export default function PizzaCard() {
  const [pizzaCount, setPizzaCount] = useState(0);
  
  const AddPizza = () => {
    setPizzaCount(pizzaCount+1);
} 
  return (
      <CardPizza>
          <img src={pizza} alt="pizza" width="260px" />
          <NamePizza>Salami</NamePizza>
          <ContainerChoosePizza>
              <ListSize>
        <Item >classic</Item>
        <Item >gluten free</Item>
      </ListSize>
      <ListSize>
        <Item >26 cm.</Item>
        <Item >30 cm.</Item>
        <Item >40 cm.</Item>
              </ListSize>
          </ContainerChoosePizza>
      <ContainerAddPizza> <Price>from 200UAH</Price>
        <AddButton type="submit" onClick={AddPizza}> + Add
          <span> {pizzaCount}</span> </AddButton>
      </ContainerAddPizza>
    </CardPizza>
  );
 
}
