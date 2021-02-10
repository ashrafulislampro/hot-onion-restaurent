
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RootComponent from './Components/RootComponent/RootComponent';
import NotFound from './Components/NotFound/NotFound';

import FoodProducts from './Components/FoodDetails/FoodProducts';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/rootComponent">
          <RootComponent/>
        </Route>
        <Route exact path="/">
          <RootComponent/>
        </Route>
        <Route path="/food/:foodId">
          <FoodProducts/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>  
    </Router>
  );
}

export default App;
