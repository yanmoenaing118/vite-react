import { Outlet, Link } from "react-router-dom";
import "./App.css";
import useAuth from "./lib/useAuth";

export default function App() {
  const { user, handleLogin, handleLogout } = useAuth();

  return (
    <div>
      <h1>Hello This is my app</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        {user ? (
          <>
            <Link to="/profile">{user.name}</Link> |{" "}
            <button onClick={handleLogout} style={{ padding: ".2em .5em" }}>
              Log out
            </button>
          </>
        ) : (
          <button
            onClick={() =>
              handleLogin({ name: "Yan Moe Naing", password: "1bdeaf" })
            }
            style={{ padding: ".2em .5em" }}
          >
            Login
          </button>
        )}
      </nav>
      <Outlet />
      <footer style={{ padding: "10rem", backgroundColor: "#444" }}></footer>
    </div>
  );
}
