/* eslint-disable no-unused-vars */
import React from "react";
import Featured from "../../Components/Featured/Featured";
import TrustedBy from "../../Components/TrustedBy/TrustedBy";
import Slide from "../../Components/Slide/Slide";
import { cards, projects } from "../../data";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import "./Home.scss";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      {/*
  <Slide /> */}
      <Slide arrowsScroll={5} slidesToShow={5}>
        {cards.map((card) => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>
      {/* features */}
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent of your fingertips</h1>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              The best part? Everything.
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.{" "}
            </p>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              Get quality work done quickly
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.{" "}
            </p>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              Pay when you are happy
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.{" "}
            </p>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              Count on 24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.{" "}
            </p>
          </div>
          <div className="item">
            <video src="./assets/fiver_video.mp4" controls></video>
          </div>
        </div>
      </div>

      {/* Fiverr business */}
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Fiverr. Business Solution</h1>
            <h1>Advanced solutions and professional talent for businesses</h1>

            <div className="title">
              <div>
                {" "}
                <img src="./assets/check.png" alt=""  className="check"/>
              </div>
              <div>
                <b> Fiverr Pro</b>
            
                <p>
                  Access top freelancers and professional business tools for any
                  project
                </p>
              </div>
            </div>
            <div className="title">
              <div>
                <img src="./assets/check.png" alt="" />
              </div>
              <div>
                <b> Fiverr Certified</b>
          
                <p>Build your own branded marketplace of certified experts</p>
              </div>
            </div>
            <div className="title">
              <div>
                {" "}
                <img src="./assets/check.png" alt="" />
              </div>
              <div>
                {" "}
                <b> Fiverr Enterprise</b>
                <p>
                  Manage your freelance workforce and onboard additional talent
                  with an end-to-end SaaS solution
                </p>
              </div>
            </div>
            <button>Learn More</button>
          </div>
          <div className="item">
            <img src="./assets/EN.webp" alt="" />
          </div>
        </div>
      </div>

      <Slide arrowsScroll={4} slidesToShow={4}>
        {projects.map((card) => (
          <ProjectCard item={card} key={card.id} />
        ))}
      </Slide>

    </div>
  );
};

export default Home;
