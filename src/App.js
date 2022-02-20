import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Productlist from "./components/Productlist"
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/:productId">
          <ProductDetail />
        </Route>
        <Route path="/">
          <Productlist />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
