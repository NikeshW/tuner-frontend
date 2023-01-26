import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from "./Reviews";
const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState({});
  const { name, artist, album, time, is_favorite } = song;
  let { id } = useParams();
  let navigate = useNavigate();

  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.log(error)
      )
      .catch((c) => console.warn("catch, c"));
  };

  const handleDelete = () => {
    deleteSong();
  };

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        console.log(response.data)
        setSong(response.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);

 
  return (
    <>
    <article>
      {song.is_favorite ? <span>⭐️</span> : null}
         <h3>
           {name}
        </h3>
        <h5>
          <span>
            <p> {artist}</p>
          </span>
         {album}
        </h5>
        <h6>{time}</h6>
      

      <div className="showNavigation">
        <div>
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${song.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
    <Reviews />
    </>
  );
}

export default SongDetails;
