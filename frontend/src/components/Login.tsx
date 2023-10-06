// In your Login.tsx component
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:8000/auth/login", {
      username,
      password,
    });

    // Store the token and user's role in local storage
    localStorage.setItem("token", response.data.access_token);
    localStorage.setItem("role", response.data.role);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
