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

  console.log(urls);
  return (
    <div className="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Your Base Link</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="list-group">
            {urls.map((url) => (
              <a
                href="#"
                key={url.id}
                className="list-group-item list-group-item-action"
              >
                Instagram UserAccount : <b>{url.dataUser.username}</b>
                <p>
                  <span className="badge badge-primary">
                    {url.dataUser.temps}
                  </span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
