
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RootComponent from './Components/RootComponent/RootComponent';
import NotFound from './Components/NotFound/NotFound';

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
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>  
    </Router>
  );
}

export default App;
