/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import axios from "../../axios";
import { ImageURL, API_KEY } from "../../constants/constands";
import YouTube from "react-youtube";
function Rowpost(props) {
  const [movies, setMovie] = useState([]);
  const [UrlID, Urlplay] = useState();
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log("jiji");
      console.log(response.data);
      setMovie(response.data.results);
    });
  }, [props.url]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          Urlplay(response.data.results[0]);
        } else {
          console.log("not available");
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallposter" : "poster"}
            src={`${ImageURL + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {UrlID && <YouTube opts={opts} videoId={UrlID.key} />}
    </div>
  );
}

export default Rowpost;
