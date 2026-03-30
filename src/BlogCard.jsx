import "./Blog.css";
import Button from "./Button";

function BlogCard(props){

    const blogImg = props.blogImg;
    const blogTitle = props.blogTitle;
    const blogDate = props.blogDate;

    return(
        <div className="blog-card">

            <div className="blog-img-box">
                <img src={blogImg} alt="blog image" />
            </div>

            <div className="blog-info">
                <div className="blog-desc">
                    <h2>
                        {blogTitle}

                    </h2>
                    <p>
                        {blogDate}
                    </p>
                </div>
                
                <Button />
            </div>

            
        </div>
    )
}

export default BlogCard;