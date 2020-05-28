import React, { Component } from "react";
import useForm from "react-hook-form";
import "./App.css";

const { app } = window.require("electron").remote;

export default function App() {
  return (
    <div className="container">
      <form>
        <input
          type="text"
          className="form-control mr-sm-2"
          placeholder="paste you url"
          name="url"
        />
        <input type="submit" className="btn btn-primary my-2 my-sm-0" />
      </form>
    </div>
  );
}
