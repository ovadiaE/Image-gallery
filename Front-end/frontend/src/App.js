import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import ImageCard from "./components/Images/ImageCard";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.get(
        `https://api.unsplash.com/photos/random/?query=${search}&client_id=${UNSPLASH_KEY}`
      );
      let data = await response.data;
      console.log(data);
      setImages([{ ...data, title: search }, ...images]);
    } catch (error) {
      console.log(error);
    }
    setSearch("");
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
        {images.map((image, key) => (
          <ImageCard key={images.id} image={image} />
        ))}
      </div>
    </>
  );
}

export default App;
