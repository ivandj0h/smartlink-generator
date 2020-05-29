import React from "react";
import { useForm } from "react-hook-form";

const Content = () => {
  const { register, handleSubmit, errors } = useForm();

  let myArray = [{}];
  const onSubmit = (data, e) => {
    let temps = data.url;

    //myArray.push(temps.repeat(13).split(" "));
    myArray = { ...myArray, url: temps.repeat(13).split(" ") };
    console.log(myArray);

    localStorage.setItem("url", JSON.stringify(myArray));
    e.target.reset();
  };

  return (
    <div>
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
        />
      </form>
    </div>
  );
};

export default Content;
