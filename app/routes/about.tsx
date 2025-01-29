import { Link } from "react-router";

export default function About() {
  return (
    <div id="about">
      <Link to="/">&larr; Go to demo</Link>
      <h1>About React Router Contacts</h1>

      <div>
        <p>
          This is demo application showing of some of the powerful features of React Router, including dinamic routing, nested routes, loaders, actions, and mode.
        </p>

        <h2>Features</h2>
        <p>
          Explorte the demo see how React Router handles:
        </p>

        <ul>
          <li>Data loading and mutations with loaders and actions</li>
          <li>Nested routing with parent/child relationship</li>
          <li>URL-based routing with dynamic segments</li>
          <li>panding and optimistic UI</li>
        </ul>

        <h2>Learn More</h2>
        <p>
          Check out the official documentation at {" "}
          <a href="https://reactrouter.dom">reactrouter.com</a>{" "}
          to learn more about building great web application with React Router . 
        </p>
      </div>
    </div>
  )
}