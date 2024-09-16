import React, { useState } from "react";

function App() {
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  let [dataErr, setDataErr] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelSubmit = () => {
    if (!data.name) {
      setDataErr((prev) => ({ ...prev, name: "Name is required!" }));
    } else if (!data.email) {
      setDataErr((prev) => ({ ...prev, email: "Email is required!" }));
    } else if (!data.password)
      setDataErr((prev) => ({ ...prev, password: "Password is required!" }));
    else {
      console.log("Submitted.");
    }
  };
  return (
    <div>
      <div className="w-96 p-4 border rounded-xl flex flex-col gap-3 m-auto mt-20">
        <input
          onChange={(e) => {
            setData((prev) => ({ ...prev, name: e.target.value }));
            setDataErr((prev) => ({ ...prev, name: "" }));
          }}
          type="text"
          placeholder="Input your name"
          className="border p-1"
        />
        <p>{dataErr.name}</p>
        <input
          onChange={(e) => {
            setData((prev) => ({ ...prev, email: e.target.value }));
            setDataErr((prev) => ({ ...prev, email: "" }));
          }}
          type="email"
          placeholder="Input your email"
          className="border p-1"
        />
        <p>{dataErr.email}</p>

        <input
          onChange={(e) => {
            setData((prev) => ({ ...prev, password: e.target.value }));
            setDataErr((prev) => ({ ...prev, password: "" }));
          }}
          type="password"
          placeholder="Input your password"
          className="border p-1"
        />
        <p>{dataErr.password}</p>

        <button
          onClick={handelSubmit}
          className="py-1 px-4 bg-green-700 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default App;
