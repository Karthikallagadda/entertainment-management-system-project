import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/11351907/pexels-photo-11351907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
          "
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/11981162/pexels-photo-11981162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7856735/pexels-photo-7856735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/"
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className='mine'>
          <h3>Third slide label</h3>
          <p> 
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>






  );
}

export default CarouselFadeExample;