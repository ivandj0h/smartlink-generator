import React from "react";
import { useForm } from "react-hook-form";
import firebase from "../firebase";

import Download from "./Download";

const Content = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    let myArray = [{}];
    myArray = { ...myArray, s: data.url.repeat(50).split(",") };

    const datauser = {
      iguser: data.username,
      igpost: data.url,
    };

    firebase
      .firestore()
      .collection("urls")
      .add({
        datauser,
        igduplicate: myArray.s,
      });

    e.target.reset();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>Add New</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="form-control mr-sm-2"
              placeholder="Instagram Username"
              name="username"
              ref={register({
                require: true,
                message: "Username tidak boleh kosong",
              })}
            />
            <br />
            <input
              type="text"
              className="form-control mr-sm-2"
              placeholder="Instagram Url"
              name="url"
              ref={register({
                require: true,
                minLength: {
                  value: 5,
                  message: "value yang dimasukan terlalu singkat",
                },
              })}
            />
            <br />
            {errors.username && errors.url}
            <input
              type="submit"
              className="btn btn-primary btn-block my-2 my-sm-0"
              onClick={props.myContentFunc}
            />
          </form>
        </div>

        <div className="col-lg-12">
          <br />
          <Download />
        </div>
      </div>
    </div>
  );
};

export default Content;
