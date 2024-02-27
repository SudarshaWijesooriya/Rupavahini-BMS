import React from "react";
import Carousel from "react-bootstrap/Carousel";

function BlogSlider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.cnn.com/api/v1/images/stellar/prod/220531190304-woman-meditation-stock.jpg?c=3x2"
            alt=""
          />
          <Carousel.Caption>
            {/*01*/}
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default BlogSlider;
