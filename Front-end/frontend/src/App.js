import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

function App() {
  const [search, setSearch] = useState("");
  const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.get(
        `https://api.unsplash.com/photos/random/?query=${search}&client_id=${UNSPLASH_KEY}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <Search
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
