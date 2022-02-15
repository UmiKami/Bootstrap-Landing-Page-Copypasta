import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./navbar";
import Hero from "./hero-section";
import Card from "./cards-section";
import Footer from "./footer"

const Page = () =>{
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <div className="row g-2 mt-1">
          <Card
            img={require("./img/bg_bggenerator_com.jpg")}
            cardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
          />
          <Card
            img={require("./img/bg_bggenerator_com.jpg")}
            cardDescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <Card
            img={require("./img/bg_bggenerator_com.jpg")}
            cardDescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <Card
            img={require("./img/bg_bggenerator_com.jpg")}
            cardDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over."
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

ReactDOM.render(<Page/>,document.getElementById("root"));

