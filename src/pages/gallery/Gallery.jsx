import React from "react";
import Header from "../../Components/Header";
import GalleryImage from "../../images/header_bg_3.jpg";
import Gallery1 from "../../images/gallery1.jpg";
import Gallery2 from "../../images/gallery2.jpg";
import Gallery3 from "../../images/gallery3.jpg";
import Gallery4 from "../../images/gallery4.jpg";
import Gallery5 from "../../images/gallery5.jpg";
import Gallery6 from "../../images/gallery6.jpg";
import Gallery7 from "../../images/gallery7.jpg";
import Gallery8 from "../../images/gallery8.jpg";
import Gallery9 from "../../images/gallery9.jpg";
import Gallery10 from "../../images/gallery10.jpg";
import Gallery11 from "../../images/gallery11.jpg";
import Gallery12 from "../../images/gallery12.jpg";
import Gallery13 from "../../images/gallery13.jpg";
import Gallery14 from "../../images/gallery14.jpg";
import Gallery15 from "../../images/gallery15.jpg";
import "./gallery.css"





const Gallery = () => {
  // const galleryLength = 15 ;
  const images = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery10,
    Gallery11,
    Gallery12,
    Gallery13,
    Gallery14,
    Gallery15,
  ];

  // for (let i = 1; i <= galleryLength; i++) {
  //   images.push(require(`../../images/gallery${i}.jpg`))

  // }

  return (
    <>
      <Header title="Our Gallery" image={GalleryImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
        possimus voluptas facilis deserunt tenetur odit quasi laborum!
      </Header>
      <section>
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
