import { Link } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <div>
      <h1>Hello This is my app</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoces">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}
