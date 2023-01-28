import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./Containers/AdminDashboard/index";
import Home from "./Containers/AdminDashboard/Home/index";
import Products from "./Containers/AdminDashboard/AddProduct/Products";
import UserList from "./Containers/AdminDashboard/Users/UserList";
import CategoryList from "./Containers/AdminDashboard/ProductCategories/CategoryLists";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          component={() => (
            <Dashboard>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" exact component={Products} />
                <Route path="/users" exact component={UserList} />
                <Route path="/categories" exact component={CategoryList} />
              </Switch>
            </Dashboard>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
