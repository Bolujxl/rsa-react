import "./Cta.css";
import Button from "./Button";
import ctaBg from "./assets/cta-bg.jpg";

function Cta(props){

    const ctaHeading = props.ctaHeading;
    const ctaDesc = props.ctaDesc;

    return (
        <section className="main-cta-section">
            <div className="main-cta">

                <div className="cta-bg">
                    <img src={ctaBg} alt="green cta stars" />
                    <div className="cta-overlay"></div>
                </div>

                <div className="cta-text-btn">
                    <div className="cta-text">
                        <h2>
                            {ctaHeading}
                        </h2>
                        <p>
                            {ctaDesc}
                        </p>
                    </div>
                    <Button buttonText="Get Started" />
                </div>
                
            </div>
        </section>
    )

}

export default Cta;