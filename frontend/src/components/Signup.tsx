import axios from "axios";
import swal from "sweetalert";
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import "@/app/globals.css";
import Link from "next/link";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      swal("Error!", "Please fill all the fields", "error");
      return;
    }

    if (password.length < 8) {
      swal("Error!", "Password must be at least 8 characters long", "error");
      return;
    }

    try {
      await axios.post("localhost:8000/users/signup", {
        username,
        password,
      });
      swal("Success!", "User successfully registered", "success").then(() =>
        router.push("/login")
      );
    } catch (error) {
      swal("Error!", "User registration failed", "error");
    }
  };

  return (
    <div className="flex mt-20 justify-center h-screen ">
      <form onSubmit={handleSubmit} className="w-80">
        <h2 className="mb-5 text-3xl font-extrabold text-center ">Sign Up</h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="block w-full px-3 py-2 text-black placeholder-gray-500 border rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              className="block w-full px-2 py-2 text-black placeholder-gray-500 border rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="password"
              name="password"
              type="password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and a special character, and at least 8 or more characters"
              // other attributes...
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </div>
        <Link href="/login" className="mt-4 text-center flex justify-center">
          Already a user?
        </Link>
      </form>
    </div>
  );
};

export default Signup;
