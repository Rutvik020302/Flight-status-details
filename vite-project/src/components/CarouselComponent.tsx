import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel className="background-carousel" controls={false} indicators={false} interval={1000} fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img2.wallspic.com/crops/1/4/2/4/24241/24241-airliner-daytime-airline-airplane-air_travel-3840x2160.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.cntraveler.com/photos/5fd26c4ddf72876c320b8001/16:9/w_2560%2Cc_limit/952456172"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m1.quebecormedia.com/emp/emp/avion_dans_le_ciel_Copie3c34f21f-e42e-4a1f-9c1e-c38006faed35_ORIGINAL.jpg?impolicy=crop-resize&x=201&y=0&w=2799&h=1576&width=1200"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
