import Map from "../assets/map.png";

import classes from "./Address.module.css";

const Address = () => {
  return (
    <div className={classes.map}>
      <h2>How to get to us:</h2>
      <img src={Map} alt="Map to restaurant" />
    </div>
  );
};

export default Address;
