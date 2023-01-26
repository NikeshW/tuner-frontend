import { Link } from "react-router-dom";

function Song({ song }) {
  const { name, artist, album, time, is_favorite } = song;
  //   console.log(typeof song.is_favorite);
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <h2>Title: {name}</h2>
        <h3>By {artist}</h3>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>
          <button>Song Details</button>
        </Link>
      </td>
    </tr>
  );
}

export default Song;
