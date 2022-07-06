import { Fragment } from "react";
import { Link } from "react-router-dom";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <h1>
              <Link to="/">Michaelangelo's</Link>
            </h1>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/address">Address</Link>
            </li>
          </ul>
        </nav>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
