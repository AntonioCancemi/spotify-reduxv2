import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const AlbumArt = (props) => {
  console.log(props.album);
  return (
    <>
      {props.album ? (
        <>
          <img src={props.album.cover} class="card-img img-fluid" alt="Album" />
          <div className="mt-4 text-center">
            <p className="album-title">{props.album.title}</p>
          </div>
          <div className="text-center">
            <Link
              to={"/artist/" + props.album.artist.id}
              className="artist-name"
            >
              {props.album.artist.name}
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Button variant="success" id="btnPlay" type="button">
              Play
            </Button>
          </div>
        </>
      ) : (
        <Spinner variant="success"></Spinner>
      )}
    </>
  );
};
export default AlbumArt;
