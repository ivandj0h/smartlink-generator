import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const { app } = window.require("electron").remote;

const App = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    let temps = new Array();
    temps = data.url.split(" ");
    localStorage.setItem("url", JSON.stringify(temps[0]));

    console.log(temps);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="form-control mr-sm-2"
          placeholder="paste you url"
          name="url"
          ref={register({
            require: "URL is Invalid",
            minLength: { value: 8, message: "too short" },
          })}
        />
        {errors.url && <p>{errors.url.message}</p>}
        <br />
        <input type="submit" className="btn btn-secondary my-2 my-sm-0" />
      </form>
    </div>
  );
};

export default App;
