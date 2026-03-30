import "./Testimonial.css"
import TestimonialCard from "./TestimonialCard";
import user1 from "./assets/user1.png";
import user2 from "./assets/user2.jpg";
import user3 from "./assets/user3.jpg";


function Testimonial(){
    return(
        <div className="main-testimonial">
             <h2>
                See How We Deliver Value - Client Success Stories.
            </h2>

            <div className="testimonial-card-container">
                <TestimonialCard quote="“With RSA’s Platform we have a greater level of risk monitoring and risk mitigation.  We needed a solution that delivers real-time comprehensive reports, with transparent audit trails, saving countless manual operational time. RSA’s automated checks and alerts help to ensure we align to our obligated requirements.”" userImg={user1} userName="Michael Carter" userRole="VP of Risk Management, FinSecure"/>
                <TestimonialCard quote="“We are thrilled to be partnering with RSA as we look forward to delivering holistic cyber risk insights to their customers. Together, we are excited to announce with this new partnership we are able to help countless organizations secure their third party risk across their vendor ecosystem.”" userImg={user2} userName="Gongo Jenkins" userRole="Director of Ops, CyberGuard Inc."/>
                <TestimonialCard quote="“We are delighted to partner with RSA,
                whose innovative solutions align perfectly with our commitment to providing cutting-edge services to our joint clients. Integrated Finance always wants to be ahead of the curve when it comes to technology and regulations, and decided to work with RSA." userImg={user3} userName="David Patterson" userRole="Security Officer, Integrated Finance"/>
            </div>
            
        </div>
    )
}

export default Testimonial;