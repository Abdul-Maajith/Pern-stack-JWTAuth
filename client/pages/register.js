import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../client/context/AuthContext";
import { useRouter } from "next/router";

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { setAuth } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password, name};

      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      
      if(parseRes.token) {
        router.push("/login");
        toast.success("Register Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }

    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1 className="mt-5 text-center">Register</h1>
      <form className="m-10" onSubmit={ handleSubmit }>
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
        <input
          type="text"
          placeholder="Enter your name"
          className="form-control my-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
    </div>
  );
}

export default register