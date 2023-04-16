import { Col, Row, Spinner } from "react-bootstrap";

import AlbumCard2 from "./AlbumCard2";
import { useEffect, useState } from "react";

const AlbumRow = (props) => {
  console.log(props.artists);
  return (
    <>
      <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
        {props.artists.map((artist, i) => (
          <AlbumCard2 key={i} artist={artist}></AlbumCard2>
        ))}
      </Row>
    </>
  );
};
export default AlbumRow;
