/* eslint-disable no-unused-vars */
import React from 'react'
import Featured from '../../Components/Featured/Featured'
import TrustedBy from '../../Components/TrustedBy/TrustedBy'
import Slide from '../../Components/Slide/Slide'
import { cards } from '../../data';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import "./Home.scss"
const Home = () => {
return (
<div className="home">
  <Featured />
  <TrustedBy />
  {/*
  <Slide /> */}
  <Slide arrowsScroll={5} slidesToShow={5}>
    {cards.map((card)=>(

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
        <p>Find the right service for every price point. No hourly rates, just project-based pricing. </p>
        <div className="title">
          <img src="./assets/check.png" alt="" />
          Get quality work done quickly
        </div>
        <p>Hand your project over to a talented freelancer in minutes, get long-lasting results. </p>
        <div className="title">
          <img src="./assets/check.png" alt="" />
          Pay when you're happy
        </div>
        <p>Upfront quotes mean no surprises. Payments only get released when you approve. </p>
        <div className="title">
          <img src="./assets/check.png" alt="" />
          Count on 24/7 support
        </div>
        <p>Our round-the-clock support team is available to help anytime, anywhere. </p>

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
          <img src="./assets/check.png" alt="" />
          Fiverr Pro
          <br />
          <p>Access top freelancers and professional business tools for any project</p>
        </div>
        <div className="title">
          <img src="./assets/check.png" alt="" />
          Fiverr Certified
          <br />
          <p>Build your own branded marketplace of certified experts
          </p>
        </div>
        <div className="title">
          <img src="./assets/check.png" alt="" />
          Fiverr Enterprise
          <br />
          <p>Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution</p>
        </div>
        <button>Learn More</button>
      </div>
      <div className="item">
        <img src="./assets/EN.webp" alt="" />
      </div>
    </div>
  </div>
</div>
)
}

export default Home