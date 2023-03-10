import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";


const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          backgroundImage: 'url(https://i.ibb.co/R7BYqrz/robotics-bg.png)',
          backgroundSize: "100%",
        }}
        className="title bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        {/* <div className="h-100 overflow-hidden" >
          <img src="https://themes.muffingroup.com/be/robotics/wp-content/uploads/2018/01/robotics-home-sliderbg.png" alt="robotics" style={{
            position: 'absolute',
            left: 1000,
            top: 200,
            overflow: 'hidden'
          }} />
        </div> */}
        <div id="stars"></div>
        <Container className="text-center ">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist>
            <div className="lead typist">
              {message}
            </div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
