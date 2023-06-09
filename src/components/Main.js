import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.woodgateclub.com.au/media/1085/liveenterainment.jpg?width=0&height=0
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
          src="https://th.bing.com/th/id/OIP.o2_iLGCrP-5GMfI8xGkhWgHaDh?w=327&h=166&c=7&r=0&o=5&dpr=1.25&pid=1.7"
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
          src="https://andyzandy.com/wp-content/uploads/2016/05/Josh-4th-Birthday089-1-1.jpg"
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