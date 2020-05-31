import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import ExportPdf from "./ExportPdf";

function useUrls() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("urls")
      .onSnapshot((snapshot) => {
        const newUrl = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUrls(newUrl);
      });
    return () => unsubscribe();
  }, []);
  return urls;
}

const Download = () => {
  const urls = useUrls();

  const makeid = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  //localStorage.setItem("dataUrls", JSON.stringify(urls));

  const deleteItem = (id) => {
    //localStorage.removeItem(id);
    firebase
      .firestore()
      .collection("urls")
      .doc(id)
      .delete();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mx-auto">
          {urls.map((url, i) => (
            <div className="card mt-3" key={i}>
              <h5 className="card-header">{url.datauser.iguser}</h5>
              <ExportPdf />
              <button
                className="btn btn-secondary btn-block my-2 my-sm-0"
                onClick={() => deleteItem(url.id)}
              >
                Clear Results
              </button>
              <div className="alert alert-dismissible alert-secondary">
                <strong className="text-secondary">
                  {url.datauser.igpost.split(",")}
                </strong>
              </div>
              <div className="alert alert-dismissible alert-light border-btm">
                Total Link yang di Generate Sebanyak :{" "}
                <strong className="text-primary">
                  {url.igduplicate.length - 2}
                </strong>{" "}
                Links
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {url.igduplicate.map((ig, i) => (
                    <li key={i} className="list-group-item">
                      <a href={ig} target="_blank">
                        <span className="text-primary">
                          https://instagram.com/p/
                          {ig.replace(
                            ig.substring(0, ig.length - 1),
                            makeid(15)
                          )}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Download;
