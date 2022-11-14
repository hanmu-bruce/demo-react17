import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Contact from "./pages/contact";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Topics from "./pages/topics";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">i am about</Route>
          {/* useParams */}
          <Route path="/contact/:id">
            <Contact />
          </Route>
          {/* nest route */}
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/" exact={true}>
            i am root
          </Route>

          {/* not found route */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
