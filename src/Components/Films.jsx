import React from "react";

const Films = (films) => {
  return (
    // <div className="row mt-3">
      <div className="col-sm-6 mb-3">
        <div className="card">
          <div className="card-body bg-light">
            <h5 className="card-title text-center">{films.films.title}</h5>
            <p className="card-text">{films.films.description}</p>
            
            <p className="card-text text-muted d-flex justify-content-evenly">
            <span>
              Release Year: {films.films.release_date}
            </span>
            <span>
              Run Time (min): {films.films.running_time}
              </span>
            </p>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Films;