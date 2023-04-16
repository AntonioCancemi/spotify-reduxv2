import { Col, Row, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import AlbumArt from "./AlbumArt";
import { useEffect, useState } from "react";
import SingleTrack from "./TrackList";
import { useSelector } from "react-redux";
import TrackList from "./TrackList";

const AlbumPage = () => {
  //serch
  const keyWord = useSelector((state) => state.search.keyWord);
  const showResults = keyWord.length > 2 ? true : false;
  //timing
  const [loading, setLoading] = useState(true);
  //url
  let { id } = useParams();
  let url = "https://striveschool-api.herokuapp.com/api/deezer/album/" + id;
  //data
  const [songList, setSongList] = useState([]);
  const [data, setData] = useState();
  //fetch
  const get = async () => {
    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
    });

    try {
      let response = await fetch(url, {
        method: "GET",
        headers,
      });

      //let imgContainer = document.querySelector("#img-container"); // gets a reference to the image container
      //let trackList = document.querySelector("#trackList"); // gets a reference to the tracklist div

      if (response.ok) {
        let album = await response.json(); // transforms the response into a JSON

        //imgContainer.innerHTML = albumArt(album); // creates the albumArt for the img-container
        for (let i = 0; i < album.tracks.data.length; i++) {
          //let div = document.createElement("div");
          songList.push(album.tracks.data[i]); // use "song" method to create the item // add the item to the tracklist
        }
        setData(album);
      }
      console.log("ueeeeuaglio", data, songList);
    } catch (exception) {
      // ex.: Url is not correct, Internal Server Error
      alert(exception);
    }
  };
  //component did mount
  useEffect(() => {
    //console.log(id);
    get();
    setTimeout(setLoading(false), 5000);
  }, []);
  return (
    <Col xs={12} md={9} className=" offset-md-3 mainPage mb-5">
      <Row className=" mb-3">
        <Col xs={9} lg={11} className=" mainLinks d-none d-md-flex">
          <Link to={"/TRENDING"}>TRENDING</Link>
          <Link to={"/PODCAST"}>PODCAST</Link>
          <Link to={"/MOODSANDGENRES"}>MOODS AND GENRES</Link>
          <Link to={"/NEWRELEASES"}>NEW RELEASES</Link>
          <Link to={"/DISCOVER"}>DISCOVER</Link>
        </Col>
      </Row>
      {showResults ? (
        <Row>
          <Col xs={10}>
            <div id="searchResults">
              <h2>Search Results</h2>
              <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3"></Row>
            </div>
          </Col>
        </Row>
      ) : (
        <Row className="">
          <Col md={3} className=" pt-5 text-center" id="img-container">
            {loading ? (
              <Spinner variant="success" />
            ) : (
              <AlbumArt album={data} />
            )}
          </Col>
          <Col md={8} className="p-5">
            <Row className="">
              <Col md={10} className=" mb-5" id="trackList">
                {loading ? (
                  <Spinner variant="success" />
                ) : (
                  <TrackList songList={songList} />
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Col>
  );
};
export default AlbumPage;
