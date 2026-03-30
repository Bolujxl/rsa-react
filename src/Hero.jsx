import "./Hero.css";
import Button from "./Button";
import heroBg from "./assets/hero-bg.png";

function Hero(props){
    const h1Text = props.h1Text;
    const pText = props.pText;

    return(
        <section className="hero">
            <div className="hero-image-wrapper">
                <img src={heroBg} alt="cityscape background" className="hero-bg" />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <div className="hero-text">
                    <h1>{h1Text}</h1>
                    <p>{pText}</p>
                </div> 

                <Button buttonText="Get Started" />
            </div>
        </section>
    )
}

export default Hero;