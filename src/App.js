import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LeftNav from "./components/LeftNav";
import BottomNav from "./components/BottomNav";
import Main from "./components/Main";
import AlbumPage from "./components/AlbumPage";
import NotFound from "./components/NotFound";
import ArtistPage from "./components/ArtistPage";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <LeftNav></LeftNav>
          <Routes>
            <Route path="/" element={<Main></Main>} />
            <Route path="/album/:id" element={<AlbumPage></AlbumPage>} />
            <Route path="/artist/:id" element={<ArtistPage></ArtistPage>} />
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
          <BottomNav></BottomNav>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
