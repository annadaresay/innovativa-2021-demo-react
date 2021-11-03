import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styles from "./App.module.css";
import { Example } from "./pages/Example/Example";
import { Home } from "./pages/Home/Home";
import { Divider } from "./ui-lib/Divider/Divider";
import { Header } from "./ui-lib/Header/Header";

const title = "React Demo 2021";

const routes = [
  { label: "🏠 Home", path: "/home", component: Home },
  { label: "🧪 Example", path: "/example", component: Example },
];

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.content}>
          <Header title={title} routes={routes} />
          <Divider />
          <div className={styles.pageContent}>
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

const Routes = () => {
  const fallbackPathname = routes[0].path;

  return (
    <>
      {/* A switch looks through its child routes and renders the first one that matches the current URL. */}
      <Switch>
        {routes.map((route) => {
          const { path, component: Component } = route;

          return (
            <Route path={path}>
              <Component />
            </Route>
          );
        })}

        {/* Redirect to fallback if no match */}
        <Route path="/">
          <Redirect
            to={{
              pathname: fallbackPathname,
            }}
          />
        </Route>
      </Switch>
    </>
  );
};

export default App;
