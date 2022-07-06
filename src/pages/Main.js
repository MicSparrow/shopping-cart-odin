import Collage from "../assets/collage.png";
import MealsSummary from "../components/Meals/MealsSummary";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.main}>
      <h1>Welcome to Michaelangelo's Restaurant!</h1>
      <MealsSummary />
      <img src={Collage} alt="Restaurant dishes" />
    </div>
  );
};

export default Main;
