import React from "react";
import { useForm } from "react-hook-form";
import firebase from "../firebase";

const Content = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    const dataUser = {
      username: data.username,
      temps: data.url,
    };
    //let pena = temps.repeat(3).split(",");
    // myArray = { ...myArray, url: temps.repeat(3).split(",") };
    // console.log(myArray);
    if (!dataUser) {
      firebase
        .firestore()
        .collection("urls")
        .add({
          dataUser,
        });
    } else {
      console.log("error");
    }

    e.target.reset();
  };

  return (
    <div className="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Add New Link</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mx-auto">
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
      </div>
    </div>
  );
};

export default Content;
