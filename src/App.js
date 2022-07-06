import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Menu from "./pages/Menu";
import Main from "./pages/Main";
import Address from "./pages/Address";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <main>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/address">
          <Address />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
