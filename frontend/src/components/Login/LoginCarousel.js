import Carousel from "react-bootstrap/Carousel";
import carouselImg from "../../assets/img/photo3.jpg";


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
        <div className="bg-overlay bg-dark opacity-5"></div>
        <img className="img-fluid" src={carouselImg} alt="First slide" />
        <img className="img-fluid" src={carouselImg} alt="First slide" />
        <Carousel.Caption >
        <div style = {{backgroundColor: "#000",padding:"10px"}}>
          <h4>
            Elite Events offre une expérience unique dans la planification d'événements, mettant à votre disposition une sélection exclusive de services haut de gamme pour des soirées mémorables.
          </h4>
          <p>Osez le meilleur </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="vh-100">
        <div className="bg-overlay bg-dark opacity-5"></div>
        <img className="img-fluid" src={carouselImg} alt="Second slide" />
        <img className="img-fluid" src={carouselImg} alt="First slide" />
        <Carousel.Caption>
        <div style = {{backgroundColor: "#0003",padding:"10px"}}>
          <h4>
            Avec Elite events, chaque détail compte. Notre plateforme vous offre un accès facile et sécurisé à une gamme complète de services personnalisés pour vos événements sociaux ou professionnels.
          </h4>
          <p>Osez le meilleur</p>
          </div >
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default LoginCarousel;
