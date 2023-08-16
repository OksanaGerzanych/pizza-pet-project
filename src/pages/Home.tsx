import Categories from "../components/Categories/Categories";
import { useState } from "react";
import SceletonLoader from "../components/SceletonLoader/SceletonLoader";
import PizzaList from "../components/PizzaList/PizzaList";

export default function Home() {
     const [isLoading, setIsLoading] = useState(false);
    return (
        <>
   <Categories />   
   { isLoading ? ([...new Array(4)].map((_, index) => <SceletonLoader key={index} />)) : (<PizzaList />) }
        </>
    )
}



//

// запит
// const [pizzas, setPizzas] = useState([]);
 
  // useEffect(() => {
    
  // fetch("https://pizza-and-desserts.p.rapidapi.com").then((res) => {
  //   return res.json().then((json) =>{
  //     console.log(json)
  //  setIsLoading(false);
  //   })
   
  // })
  // }, [])
 