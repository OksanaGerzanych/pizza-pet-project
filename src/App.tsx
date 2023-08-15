import "./App.css";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import PizzaList from "./components/PizzaList/PizzaList";
import {  useState } from "react";
import SceletonLoader from "./components/SceletonLoader/SceletonLoader";


function App() {
  const [isLoading, setIsLoading] = useState(false);

  // const [pizzas, setPizzas] = useState([]);
 
  // useEffect(() => {
    
  // fetch("https://pizza-and-desserts.p.rapidapi.com").then((res) => {
  //   return res.json().then((json) =>{
  //     console.log(json)
  //  setIsLoading(false);
  //   })
   
  // })

  // }, [])
 

  return <>
    <Header />
    <Categories />
    {isLoading ? ([...new Array(4)].map((_, index) => <SceletonLoader key={index} />)) : <PizzaList />}
    
  </>;
}

export default App;
