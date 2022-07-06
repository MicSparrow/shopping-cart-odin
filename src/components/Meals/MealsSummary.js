import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food close to You!</h2>
      <p>
        Be sure to check our menu as all our meals are carefully cooked with
        high-quality ingredients!
      </p>
      <p>Now delivery is free in the city area!</p>
    </section>
  );
};

export default MealsSummary;
