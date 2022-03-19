import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../client/context/AuthContext";
import { toast } from "react-toastify";

const dashboard = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    {
      !auth ? router.push("/login") : router.push("/dashboard");
    }
  }, [auth]);

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard", {
        method: "POST",
        headers: { 
          token: localStorage.token
        },
      });

      const parseData = await res.json();
      setName(parseData.user_name);
    } catch(err) {
      console.log(err);
      setAuth(false);
    }
  }

  useEffect(() => {
    getProfile();
  }, [])

  return (
    <div>
      <h1>Welcome to the Dashboard! {name}</h1>
      <button
        onClick={() => {
          setAuth(false);
          localStorage.removeItem("token");
        }}
        className="btn btn-primary"
      >
        Logout
      </button>
    </div>
  );
};

export default dashboard;
