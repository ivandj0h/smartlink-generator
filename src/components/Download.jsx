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
      <div className="row">
        <div className="col-lg-12">
          <h2>Your Base Link</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mx-auto">
          {urls.map((url) => (
            <div className="card mt-3 key={url.id}">
              <h5 className="card-header">{url.datauser.iguser}</h5>
              <div className="card-body">
                <h6 className="card-subtitle text-muted">
                  {url.datauser.igpost}
                </h6>
                <ul className="list-group list-group-flush">
                  {url.igduplicate.map((ig, i) => (
                    <li keys={i} className="list-group-item">
                      <span className="badge badge-primary">{ig}</span>
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
