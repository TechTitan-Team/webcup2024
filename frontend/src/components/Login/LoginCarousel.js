import Carousel from "react-bootstrap/Carousel";
import carouselImg from "../../assets/img/sary.jpg";


function LoginCarousel() {
  return (
    <Carousel
      className="h-100"
      controls={false}
      fade
      autoPlay={true}
      interval={1000}
    >
      <Carousel.Item className="vh-100">
        <div class="bg-overlay bg-dark opacity-5"></div>
        <img className="img-fluid" src={carouselImg} alt="First slide" />
        <Carousel.Caption >
        <div style = {{backgroundColor: "#0003",padding:"10px"}}>
          <h4>
            " Through collaboration and strategic direction, they steer the
            agency towards its goals, navigating the ever-evolving landscape
            with agility and grace."
          </h4>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="vh-100">
        <div class="bg-overlay bg-dark opacity-5"></div>
        <img className="img-fluid" src={carouselImg} alt="Second slide" />
        <Carousel.Caption>
        <div style = {{backgroundColor: "#0003",padding:"10px"}}>
          <h4>
            " Through collaboration and strategic direction, they steer the
            agency towards its goals, navigating the ever-evolving landscape
            with agility and grace."
          </h4>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div >
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="vh-100">
        <div class="bg-overlay bg-dark opacity-5"></div>
        <img className="img-fluid" src={carouselImg} alt="Third slide" />
        <Carousel.Caption>
        <div style = {{backgroundColor: "#0003",padding:"10px"}}>
          <h4>
            " Through collaboration and strategic direction, they steer the
            agency towards its goals, navigating the ever-evolving landscape
            with agility and grace."
          </h4>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default LoginCarousel;
