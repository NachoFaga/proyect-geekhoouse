import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <h1 className="home__title">GEEK HOUSE</h1>
        <h3>Las mejores figuras de anime y videojuegos en un solo lugar!</h3>

        <Link to="/shop" className="home__cta">
          VER
        </Link>

      </div>
    </>
  );
};

export default Home;
