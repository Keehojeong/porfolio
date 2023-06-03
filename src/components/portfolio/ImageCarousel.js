import Carousel from 'react-bootstrap/Carousel';
import gpsImg from '../../img/gpsHJ.png'
import areaImg from '../../img/areaHJ.png'
import conImg from '../../img/conHJ.png'

function ImageCarousel() {
  return (
    <Carousel variant="dark" style={{width: '60%', marginLeft: '20%', marginTop: '7%', marginBottom: '8%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gpsImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>위치관제</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={conImg}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>컨테이너</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={areaImg}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>작업지/시설물</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;