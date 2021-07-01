import React from "react";

const People = (props) => {
// props.people needs to display: name, age, gender, and a link to that particular person's JSON response that will open in a new tab
  return (
      <div className="col-sm-6 mb-3">
        <div className="card">
          <div className="card-body bg-light">
            <h5 className="card-title">Name: {props.people.name}</h5>
            <p className="card-text">Age: {props.people.age}</p>
            <p className="card-text">
              Gender: {props.people.gender}
            </p>
            <p className="card-text text-muted">
              <a href={props.people.url} target="_blank" rel="noreferrer">Link to their JSON info</a>
            </p>
          </div>
        </div>
      </div>
  );
};

export default People;