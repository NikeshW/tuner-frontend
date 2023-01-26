import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h2>
      <Link to="/">Tuner</Link>
      </h2>
      
     <div className="nav-buttons">
        <Link to="/songs"><button>Songs</button></Link>
      
      
      <Link to="/songs/new"><button >New Song</button></Link>
      </div>
      
    </nav>
  );
}

export default NavBar;
