import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Welcome = () => {
  return (
    <>
      <div>
        <Jumbotron>
          <h1 className="display-3">Image Gallery</h1>
          <p className="lead">
            This is a simple application that retrieves photos using Unsplash
            API.
          </p>
          <hr className="my-2" />
          <p className="lead">
            <Button
              color="primary"
              href="https://unsplash.com/"
              target="_blank"
            >
              Learn More
            </Button>
          </p>
        </Jumbotron>
      </div>
    </>
  );
};

export default Welcome;
