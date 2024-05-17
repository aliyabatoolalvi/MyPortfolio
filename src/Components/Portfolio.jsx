/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "StudentKit 📱",
    description:
      "App to create one for all platform for a students, to find lendale objects, be it tools for experiment, camera, laptop etc, within the insititute campus.",
    url: "https://github.com/aliyabatoolalvi/StudentKit",
  },
  {
    title: "Badminton Counter App 🏸",
    description:
      "App to keep track of badminton scores. It is a simple app to keep track of the score of a badminton game.",
    url: "https://github.com/aliyabatoolalvi/BadmintonCounter",
  },
  {
    title: "My First Portfolio 👩‍💻👩‍💻",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/aliyabatoolalvi/My-portfolio",
  },
  {
    title: " Tech Planet 🌍",
    description:
      "One app for all tech news, updates, and blogs. It is a platform where you can find all the latest tech and updates to buy.",
    url: "https://github.com/aliyabatoolalvi/TechPlanet",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
