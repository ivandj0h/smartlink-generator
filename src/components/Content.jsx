import React from "react";
import { useForm } from "react-hook-form";
import firebase from "../firebase";
import Download from "./Download";

const Content = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();

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
          <h3>Input Data Baru</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              id="username"
              className="form-control mr-sm-2 mb-2"
              placeholder="Instagram Username"
              name="username"
              aria-invalid={errors.username ? "true" : "false"}
              aria-describedby="error-username-required error-username-maxLength"
              ref={register({ required: true, maxLength: 10, minLength: 4 })}
            />
            <span
              className="text-danger"
              role="alert"
              id="error-username-required"
              style={{
                display:
                  errors.username && errors.username.type === "required"
                    ? "block"
                    : "none",
              }}
            >
              Kolom ini tidak boleh kosong!
            </span>
            <span
              className="text-danger"
              role="alert"
              id="error-username-minLength"
              style={{
                display:
                  errors.username && errors.username.type === "minLength"
                    ? "block"
                    : "none",
              }}
            >
              Inputannya terlalu singkat!
            </span>
            <span
              className="text-danger"
              role="alert"
              id="error-username-maxLength"
              style={{
                display:
                  errors.username && errors.username.type === "maxLength"
                    ? "block"
                    : "none",
              }}
            >
              Inputannya kepanjangan!
            </span>

            <input
              type="url"
              id="url"
              className="form-control mr-sm-2"
              placeholder="Instagram url (taruh koma dibelakang inputan)"
              name="url"
              aria-invalid={errors.url ? "true" : "false"}
              aria-describedby="error-url-required error-url-maxLength"
              ref={register({
                required: true,
                maxLength: 100,
                minLength: 10,
                pattern: "https://.*",
              })}
            />
            <span
              className="text-danger"
              role="alert"
              id="error-url-required"
              style={{
                display:
                  errors.url && errors.url.type === "required"
                    ? "block"
                    : "none",
              }}
            >
              Kolom ini tidak boleh kosong!
            </span>
            <span
              className="text-danger"
              role="alert"
              id="error-url-minLength"
              style={{
                display:
                  errors.url && errors.url.type === "minLength"
                    ? "block"
                    : "none",
              }}
            >
              Inputannya terlalu singkat!
            </span>
            <span
              className="text-danger"
              role="alert"
              id="error-url-maxLength"
              style={{
                display:
                  errors.url && errors.url.type === "maxLength"
                    ? "block"
                    : "none",
              }}
            >
              Inputannya kepanjangan!
            </span>
            <br />
            <input
              type="submit"
              className="btn btn-primary btn-block my-2 my-sm-0"
              onClick={props.myContentFunc}
            />
          </form>
        </div>

        <div className="col-lg-12">
          <Download />
        </div>
      </div>
    </div>
  );
};

export default Content;
