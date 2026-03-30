import "./FeatureCard.css";

function FeaturesCard(props){

    const featImg = props.featImg;
    const featHead = props.featHead;
    const featDesc = props.featDesc;

    return(
        <div className="features-box">

            <div className="featimgbox">
                <img src={featImg} alt="cyber" />
            </div>

            <div className="featText">
                <h3>{featHead}</h3>
                <p>{featDesc}</p>
            </div>


        </div>
        
    )
}

export default FeaturesCard;
