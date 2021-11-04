import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Bears from './components/Bears';
import SingleBear from './components/sherd/SingleBear/SingleBear';



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
    
        </Switch>
    </Router>
  
  );
}

export default App;
