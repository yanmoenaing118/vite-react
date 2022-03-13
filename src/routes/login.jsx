import useAuth from "./../lib/useAuth";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function LoginPage() {
  const { handleLogin: login } = useAuth();
  const [formData, setFormData] = useState({ name: "", password: "" });

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData, () => {
      navigate(from, { replace: true });
    });
  };

  function handleChange(key) {
    return (e) => {
      setFormData({ ...formData, [key]: e.target.value });
    };
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>Name</p>
            <input type="text" onChange={handleChange("name")} />
          </label>
        </div>

        <div>
          <label>
            <p>Name</p>
            <input type="text" onChange={handleChange("password")} />
          </label>
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </main>
  );
}
