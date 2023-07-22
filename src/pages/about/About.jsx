import React from 'react'
import Header from '../../Components/Header'
import HeaderImage from "../../images/header_bg_1.jpg"
import Story from "../../images/about1.jpg"
import Vision from "../../images/about2.jpg"
import Mission from "../../images/about3.jpg"

import "./about.css"
const About = () => {
  return (
    <>
    <Header title="About US" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum adipisci magni voluptas sint quisquam voluptatum.
    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={Story} alt="" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae optio deleniti voluptatibus, ex voluptatum dolorum provident id minus perferendis dolores? Culpa autem veniam maxime perspiciatis aspernatur vero nisi natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae optio deleniti voluptatibus, ex voluptatum dolorum provident id minus perferendis dolores? Culpa autem veniam maxime perspiciatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae optio deleniti voluptatibus, ex voluptatum dolorum provident id minus perferendis dolores.</p>
        </div>
      </div>
    </section>
    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae optio deleniti voluptatibus, ex voluptatum dolorum provident id minus perferendis dolores? Culpa autem veniam maxime perspiciatis aspernatur vero nisi natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae optio deleniti voluptatibus, ex voluptatum dolorum provident id minus perferendis dolores? Culpa autem veniam maxime perspiciatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae optio deleniti voluptatibus, ex voluptatum dolorum provident id minus perferendis dolores.</p>
        </div>
        <div className="about__section-image">
          <img src={Vision} alt="" />
        </div>
      </div>
    </section>
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={Mission} alt="" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae optio deleniti voluptatibus, ex voluptatum dolorum provident id minus perferendis dolores? Culpa autem veniam maxime perspiciatis aspernatur vero nisi natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae optio deleniti voluptatibus, ex voluptatum dolorum provident id minus perferendis dolores? Culpa autem veniam maxime perspiciatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae optio deleniti voluptatibus, ex voluptatum dolorum provident id minus perferendis dolores.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About