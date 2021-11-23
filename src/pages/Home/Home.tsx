import React from "react";
import { Spacer } from "../../ui-lib/Spacer/Spacer";

export const Home = () => {
  return (
    <>
      <h1>Welcome to this demo app!</h1>
      <Spacer size={32} />
      <p>
        This React app was created as a demo for the course{" "}
        <a href="https://www.umu.se/utbildning/kurser/innovativa-mobila-tjanster-och-system2/">
          Innovativa mobila tjänster och system
        </a>{" "}
        in november 2021. This year's theme is about hybrid teams and how to
        make remote team members feel included. In the upcoming project, one
        part of the solution might be a React app, but it's all up to you!
      </p>

      <Spacer size={48} />

      <h2>About React</h2>
      <Spacer size={16} />
      <p>
        React is a JavaScript library, which is used to build user interfaces.
        It's the most common web framework today and it's purpose is to make app
        bulding fast, scalable and simple.
      </p>
      <Spacer size={16} />
      <p>
        Checkout the <a href="https://reactjs.org/">official page</a> for info
        and tutorials.
      </p>

      <Spacer size={48} />

      <h2>The demo app</h2>
      <Spacer size={16} />
      <p>
        The demo app was generated using{" "}
        <a href="https://create-react-app.dev/">Create React App</a>. If you are
        learning React, this is a good place to start to avoid getting stuck
        configuring build tools. Feel free to clone this repo and use it as a
        start for your project.
      </p>
      <Spacer size={16} />
      <p>The code includes examples of:</p>
      <Spacer size={8} />
      <ul>
        <li>Basic project structure</li>
        <li>Basic routing</li>
        <li>Components with props</li>
        <li>Components with state</li>
        <li>React hooks</li>
        <li>Integration with GraphhQL and Apollo</li>
      </ul>
    </>
  );
};
