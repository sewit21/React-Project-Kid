import React from "react";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";
import "./pages.css";
import Youtubes from "./image";
import Pic from "./pic";

function Home() {
  const Bounce = styled.div`
    animation: 30s ${keyframes`${bounce}`} infinite;
  `;

  return (
    <div className="Home">
      <div className="header">
        <Bounce>
          {" "}
          <h1 className="logo"> ⛅️ </h1>{" "}
        </Bounce>
        <h2 className="welcome"> Welcome To Kid-Ink</h2>
      </div>

      <div className="centerp">
        <div id="center">
          <p>
            Welcome to Kid-Ink. This website was built for kids to be free. Kids
            can have fun by being creative and thinking of new ideas. Remember
            to have fun and leave any feedbacks through our contact form.{" "}
          </p>

          <h2>Image of the Week: </h2>
          <div className="picbody">
            <Pic />
            <p className="picbodys">
              {" "}
              Due to this pandemic, students are required to stay home and
              attend virtual classes. Virtual classes can be boring, but its
              important to remember education is the key!{" "}
            </p>
          </div>

          <h3> Video of the Week:</h3>
          <div className="rocket">
            <Youtubes videoId="ypPSrRYOAj4" />
            <Bounce>
              <h4 className="rock"> 🤾🏼‍♂️ 🗑 </h4>
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
