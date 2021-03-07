import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();

  function clickLink(e) {
    e.preventDefault();
    history.push("/items");
  }

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="http://www.sanctuaryrecordsgroup.com/wp-content/uploads/2017/05/banner-eCommerce-Solutions.jpg"
        alt=""
      />
      <button className="md-button shop-button" onClick={clickLink}>
        Shop now!
      </button>
    </div>
  );
}

export default Home;
