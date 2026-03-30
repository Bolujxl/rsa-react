import FeaturesCard from "./FeaturesCard";

import feat1 from "./assets/feature1.jpg";
import feat2 from "./assets/feature2.jpg";
import feat3 from "./assets/feature3.jpg";
import feat4 from "./assets/feature4.jpg";

function Features(){

    return(
        <section className="main-features">
            <h2>
                Eliminate uncertainty across every relationship with our core feature suite
            </h2>

            <div className="features-card-container">
                <FeaturesCard featImg= {feat1} featHead="Continuous Real Time Risk Monitoring" featDesc="Mitigate the impact on your  organization and make timely decisions to protect your business interests." />
                <FeaturesCard featImg= {feat2} featHead="Customizable & Scalable Workflow Process" featDesc="Tailor the platform to your organization’s unique needs with flexible workflows that adapt as you grow." />
                <FeaturesCard featImg= {feat3} featHead="Improved Business Efficiency & Cost Savings" featDesc="Reduce manual processes and operational time by 60%. All the data in one place to make informed decisions on your partners." />
                <FeaturesCard featImg= {feat4} featHead="Comprehensive Risk Assessment" featDesc="Identify, evaluate, and prioritize risks across your organization using our comprehensive risk assessment framework." />
            </div>
        </section>
    )
}

export default Features;