import React, { useEffect, useState } from "react";
import JokeItem from "./JokeItem";
import Spinner from "./Spinner";

const Joke = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const url = "https://v2.jokeapi.dev/joke/Any?type=single";
      const res = await fetch(url);
      const getActualData = await res.json();
      // console.log(getActualData);
      setData(getActualData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <a href="/" className="btn btn-sm btn-success rounded-3 my-5">
        Next Joke
      </a>
      <div className="my-5">
        {loading ? loading && <Spinner /> : <JokeItem jokes={data} />}
      </div>
    </div>
  );
};

export default Joke;
