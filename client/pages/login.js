import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../client/context/AuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth, auth } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {    
    auth ? router.push("/dashboard") : router.push("/login");
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your Email"
          className="form-control my-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter the password"
          className="form-control my-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success btn-block">Authenticate</button>
      </form>
      <button className="btn btn-success btn-block my-2" onClick={() => router.replace("/register")}>New user? Register</button>
    </div>
  );
};

export default login;
