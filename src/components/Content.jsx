import React from "react";
import { useForm } from "react-hook-form";
import firebase from "../firebase";

const Content = (props) => {
  const { register, handleSubmit, errors } = useForm();

  // let myArray = [{}];
  const onSubmit = (data, e) => {
    let temps = data.url;
    //let pena = temps.repeat(3).split(",");
    // myArray = { ...myArray, url: temps.repeat(3).split(",") };
    // console.log(myArray);

    firebase
      .firestore()
      .collection("urls")
      .add({
        temps,
      });

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
              placeholder="paste you url"
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
            {errors.url && (
              <div className="alert alert-dismissible alert-danger">
                <h4 className="alert-heading">Error!</h4>
                <p className="mb-0">{errors.url.message}</p>
              </div>
            )}
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
