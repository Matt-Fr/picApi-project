import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "../components/Photo";

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    url = `${mainUrl}${clientID}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {});
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <form>
          <input type="text" placeholder="search" />
          <button type="submit" onClick={handleSubmit}>
            <FaSearch></FaSearch>
          </button>
        </form>
      </section>
      <section>
        <div>
          {photos.map((image) => {
            console.log(image);
            return <Photo key={image.id} {...image}></Photo>;
          })}
        </div>
        {loading && <h2>Loading...</h2>}
      </section>
    </>
  );
};

export default Home;
