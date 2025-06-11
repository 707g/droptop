import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function MainHeader() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage src={process.env.PUBLIC_URL + "/images/main/mainImg01.jpg"} text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={process.env.PUBLIC_URL + "/images/main/mainImg02.jpg"} text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={process.env.PUBLIC_URL + "/images/main/mainImg03.jpg"} text="First slide" />
      </Carousel.Item>
      
    </Carousel>
  )
};

export default MainHeader;