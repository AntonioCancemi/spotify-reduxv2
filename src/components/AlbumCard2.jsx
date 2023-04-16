import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AlbumCard2 = (props) => {
  console.log(props.artist);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });
  const handleArtist = async (artistName) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        let result = await response.json(); // transforms the response to json
        let singleData = result.data;
        setData(singleData[0]);
        setLoading(false);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleArtist(props.artist);
    // console.log(data);
  }, []);
  return (
    <>
      {loading ? (
        <Col></Col>
      ) : (
        <Col className=" text-center" id={data.id}>
          <a href={"/album/" + data.album.id}>
            <img className="img-fluid" src={data.album.cover_medium} alt="1" />
          </a>
          <p>
            {props.albumPage ? (
              <>
                <Link href="#">
                  Track: "$
                  {
                    data.album.title.length < 16
                      ? data.album.title
                      : data.album.title.substring(0, 16) + "..." // setting the track title, if it's longer than 16 chars cuts the rest
                  }
                  "
                </Link>
                <br />
              </>
            ) : (
              <></>
            )}
            <Link to={"/album/" + data.album.id}>
              Album:
              {data.album.title.length < 16
                ? data.album.title
                : data.album.title.substring(0, 16) + "..."}
            </Link>
            <br />
            <Link to={"/artist/" + data.artist.id}>
              Artist: {data.artist.name}
            </Link>
          </p>
        </Col>
      )}
    </>
  );
};
export default AlbumCard2;
