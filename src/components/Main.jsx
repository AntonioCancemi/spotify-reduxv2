import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AlbumRow from "./AlbumRow";
import { Link } from "react-router-dom";
import { resetHomeContent, setHomeContent } from "../redux/action/userAction";

const Main = () => {
  const dispatch = useDispatch();
  const keyWord = useSelector((state) => state.search.keyWord);
  const showResults = keyWord.length > 2 ? true : false;
  console.log(showResults);
  const rockArtists = useSelector(
    (state) => state.user.randomArtists.rockArtists
  );

  const popArtists = useSelector(
    (state) => state.user.randomArtists.popArtists
  );
  const hipHopArtists = useSelector(
    (state) => state.user.randomArtists.rockArtists
  );
  let rockRandomArtists = [];
  let popRandomArtists = [];
  let hipHopRandomArtists = [];
  const rockRandom = useSelector((state) => state.user.homeContent[0][0]);
  const popRandom = useSelector((state) => state.user.homeContent[0][1]);
  const hiphopRandom = useSelector((state) => state.user.homeContent[0][2]);

  const getRandomArtist = () => {
    dispatch(resetHomeContent());
    console.log("ciao");
    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }
    dispatch(
      setHomeContent([rockRandomArtists, popRandomArtists, hipHopRandomArtists])
    );
  };
  useEffect(() => {
    getRandomArtist();
  }, []);
  return (
    <>
      <Col
        xs={10}
        md={9}
        className="mb-5 pb-3 offset-md-3 offset-xs-5 mainPage"
      >
        <Row className=" mb-3">
          <Col xs={9} lg={11} className=" mainLinks d-none d-md-flex">
            <Link to={"/TRENDING"}>TRENDING</Link>
            <Link to={"/PODCAST"}>PODCAST</Link>
            <Link to={"/MOODSANDGENRES"}>MOODS AND GENRES</Link>
            <Link to={"/NEWRELEASES"}>NEW RELEASES</Link>
            <Link to={"/DISCOVER"}>DISCOVER</Link>
          </Col>
        </Row>
        {/* risultati */}
        {showResults ? (
          <Row>
            <Col xs={10}>
              <div id="searchResults">
                <h2>Search Results</h2>
                <Row
                  xs={1}
                  sm={2}
                  lg={3}
                  xl={4}
                  className="imgLinks py-3"
                ></Row>
              </div>
            </Col>
          </Row>
        ) : (
          <>
            <Row>
              <Col xs={10}>
                <div id="rock">
                  <h2>Rock classic</h2>
                  <AlbumRow
                    genre="rock"
                    artists={rockRandom || rockRandomArtists}
                  ></AlbumRow>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="pop">
                  <h2>Pop Culture</h2>
                  <AlbumRow
                    genre="pop"
                    artists={popRandom || popRandomArtists}
                  ></AlbumRow>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="hiphop">
                  <h2>HipHop</h2>
                  <AlbumRow
                    genre="hiphop"
                    artists={hiphopRandom || hipHopRandomArtists}
                  ></AlbumRow>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Col>
    </>
  );
};
export default Main;
