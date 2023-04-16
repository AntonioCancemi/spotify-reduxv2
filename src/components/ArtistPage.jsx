import { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import TrackList from "./TrackList";

const ArtistPage = () => {
  const keyWord = useSelector((state) => state.search.keyWord);
  const showResults = keyWord.length > 2 ? true : false;

  const [songList, setSongList] = useState([]);
  const [fetchArtist, setFetchArtist] = useState();
  const [showButtons, setShowButtons] = useState(false);
  const [showTraks, setShowTraks] = useState(false);
  let { id } = useParams();

  const getArtistPage = async () => {
    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    });

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let artist = await response.json();
        setFetchArtist(artist);
        setShowButtons(true);

        let tracksResponse = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            artist.name,
          {
            method: "GET",
            headers,
          }
        );

        if (tracksResponse.ok) {
          let tracklist = await tracksResponse.json();
          setShowTraks(true);
          for (let i = 0; i < tracklist.data.length; i++) {
            songList.push(tracklist.data[i]);
          }
        }
      } else {
        console.log("NOT OK" + (await response.text()));
      }
    } catch (exception) {
      console.log(exception);
    }
  };
  useEffect(() => {
    getArtistPage();
    console.log(fetchArtist, songList);
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
        <>
          <Row>
            <Col xs={12} md={10} lg={10} className="mt-5">
              <h2 className="titleMain">
                {fetchArtist ? fetchArtist.name : ""}
              </h2>
              <div id="followers">
                {fetchArtist ? fetchArtist.nb_fan + " followers" : ""}
              </div>
              <div
                className="d-flex justify-content-center"
                id="button-container"
              >
                <Button
                  variant="success"
                  className={
                    showButtons ? "mr-2 mainButton " : "mr-2 mainButton d-none"
                  }
                  id="playButton"
                >
                  PLAY
                </Button>
                <Button
                  className={
                    showButtons
                      ? "btn-outline-light mainButton"
                      : "btn-outline-light mainButton d-none"
                  }
                  id="followButton"
                >
                  FOLLOW
                </Button>
              </div>
            </Col>
          </Row>
          <Row class=" mb-3">
            <Col xs={10} md={10} lg={10} class=" offset-1 p-0">
              <div class="mt-4 d-flex justify-content-start">
                <h2 class="text-light fw-bold">Tracks</h2>
              </div>
              <div class="pt-5 mb-5">
                <Row class="row" id="apiLoaded">
                  {showTraks ? (
                    <TrackList songList={songList}></TrackList>
                  ) : (
                    <Spinner variant="success" />
                  )}
                </Row>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Col>
  );
};
export default ArtistPage;
