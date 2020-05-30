import React, { useState, useEffect } from "react";
import firebase from "../firebase";

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

  // console.log(urls);
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

  const deleteItem = (id) => {
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
          {urls.map((url) => (
            <div className="card mt-3 key={url.id}">
              <h5 className="card-header">{url.datauser.iguser}</h5>
              <div className="alert alert-dismissible alert-secondary">
                <strong className="float-left">
                  {url.datauser.igpost.split(",")}
                </strong>
                <button
                  className="btn btn-sm btn-secondary float-right"
                  onClick={() => deleteItem(url.id)}
                >
                  Clear Results
                </button>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {url.igduplicate.map((ig, i) => (
                    <li keys={i} className="list-group-item">
                      <a href={ig} target="_blank">
                        <span className="text-danger">
                          https://instagram.com/p/
                          {ig.replace(
                            ig.substring(0, ig.length - 1),
                            makeid(5)
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
