import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import ImageCard from "./components/Images/ImageCard";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const UNSPLASH_URL =
    process.env.REACT_APP_UNSPLASH_URL || "http://10.100.102.73:5050";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.get(`${UNSPLASH_URL}/new-image?query=${search}`);
      let data = await response.data;
      console.log(response.config.url);
      setImages([{ ...data, title: search }, ...images]);
    } catch (error) {
      console.log(error);
    }
    setSearch("");
  };
  const handleDeleteimage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };
  return (
    <>
      <div>
        <Header />
        <Search
          handleSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
        />
        <Container className="mt-4">
          {images.length ? (
            <Row className="pb-3" xs={1} md={2} lg={3}>
              {images.map((image, key) => (
                <Col key={images.id}>
                  <ImageCard
                    handleDeleteimage={handleDeleteimage}
                    image={image}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <Welcome />
          )}
        </Container>
      </div>
    </>
  );
}

export default App;
