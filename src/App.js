import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Bears from './components/Bears';
import SingleBear from './components/sherd/SingleBear/SingleBear';
import RandomBear from './components/sherd/SingleBear/RandomBear/RandomBear';
import Favorites from './components/Favorites/Favorites';




function App() {
  return (
 
    <Router>
      <Header />
        <Switch>
    
        <Route path="/bears/:id">
            <SingleBear/>
          </Route>



          <Route path="/bears">
            <Bears/>
          </Route>


          <Route path="/random">
            <RandomBear/>
          </Route>

          <Route path="/favorites">
            <Favorites/>
          </Route>
     
    
        </Switch>
    </Router>
  
  );
}

export default App;
