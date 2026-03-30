import "./Testimonial.css"

function TestimonialCard(props){

    const quote = props.quote;
    const userImg = props.userImg;
    const userName = props.userName;
    const userRole = props.userRole;

    return(
        <div className="testimonial-card">

            <div className="text-box">
                <p>
                    {quote}
                </p>
            </div>

            <div className="user-box">
                <div className="img-box">
                    <img src={userImg} alt="user image" />
                </div>

                <div className="user-info">
                    <p>{userName}</p>
                    <p>{userRole}</p>
                </div>
            </div>
            
        </div>
    )
}

export default TestimonialCard;