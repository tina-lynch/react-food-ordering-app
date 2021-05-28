import {  useState, useCallback, useEffect } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';





const AvailableMeals = () => {
  const [meals, setMeals]=useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)


  const fetchMeals = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const resp = await fetch('https://react-http-f8d3b-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json')
  
      if (!resp.ok) {
        throw new Error('Request failed!');
      }
  
      const data = await resp.json();
      
      const loadedMeals = [];

      for (const key in data){
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        })
      }
      setMeals(loadedMeals);
     
    } catch(err){
      setError(err.message)
    }
    setIsLoading(false)
  },[])


  useEffect(() => {
		fetchMeals();
	}, [fetchMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));


  let content = <p>No Meals Found</p>;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if(error){
    content = <p>{error}</p>;
  }

  
  if (meals.length > 0){
    content = <ul>{mealsList}</ul>;
  }
 
  

  

  return (
    <section className={classes.meals}>
      <Card>
        {content}
      </Card>
    </section>
  );
};

export default AvailableMeals;
