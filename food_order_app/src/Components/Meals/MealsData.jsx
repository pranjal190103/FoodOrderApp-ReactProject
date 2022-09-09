import React, { useState, useEffect } from "react";
import MealsList from "./MealsList";
import "./MealsData.css";
import Card from "../UI/Card";
import Loading from "./Loading";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 229,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 169,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 129,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 289,
//   },
// ];

// ****** Using firebase realtime database for obtaining menu items
const MealsData = (props) => {
  const [meals, setMeals] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // func in useEffect should not return a promise so that we can use our promise giving func inside an arrow func
  useEffect(() => {
    loadMeals();
  }, []);

  const loadMeals = async () => {
    const response = await fetch(
      "https://yummie-hut-default-rtdb.firebaseio.com/Meals.json"
    );
    const res = await response.json();
    setMeals(res);
    setIsLoading(false);
    props.onMenuShowStatus(true);

    //   if (response.ok) {
    //     //response.status===200
    //     setIsLoading(false);
    //   }
    // };
  };
  // loadMeals();
  const mealsList = [];
  for (const key in meals) {
    mealsList.push(meals[key]);
  }

  const mealsStats = mealsList.map((key) => (
    <MealsList
      key={key.id}
      id={key.id}
      name={key.name}
      desc={key.description}
      price={key.price}
    />
  ));

  return (
    <div className="meals-data">
      <Card>
        <ul>{!isLoading ? mealsStats : <Loading />}</ul>
      </Card>
    </div>
  );
};

export default MealsData;
