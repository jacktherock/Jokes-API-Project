import React from "react";

const JokeItem = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div
          className="card bg-light shadow py-5 px-5 jokeItem-card"
        >
          <div className="card-body">
            <p className="card-text">
              <em> {props.jokes.joke}</em>
            </p>
          </div>
          <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-warning">
            {props.jokes.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JokeItem;
