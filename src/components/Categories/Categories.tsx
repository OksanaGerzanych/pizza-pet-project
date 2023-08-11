import { useState } from "react";
import Sort from "../Sort/Sort.js";
import {
  CategoriesList,
  CategoriesItem,
  SectionFilter,
} from "./Categories.styled";

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['All', 'Meat', 'Vegetarian', 'Calzone', 'Spicy'];

  const activeCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <SectionFilter>
      <div>
        <CategoriesList>
          {categories.map((category, index) => (
             
              <CategoriesItem
                onClick={() => activeCategory(index)}
                active={activeIndex === index}
              >
                {category}
              </CategoriesItem>
        
          ))}
        </CategoriesList>
      </div>
      <Sort />
    </SectionFilter>
  );
}
