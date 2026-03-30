import "./Blog.css";
import BlogCard from "./BlogCard";
import blog1 from "./assets/blog1.jpg"
import blog2 from "./assets/blog2.jpg"
import blog3 from "./assets/blog3.jpg"
import blog4 from "./assets/blog4.jpg"

function Blog(){

    return(
        <section className="main-blog">
            <h2>
                Check our latest news
            </h2>

            <div className="blog-card-container">
                <BlogCard blogImg={blog1} blogTitle="RSA Partners with CyberGuard Inc. to Deliver Holistic Cyber Risk Insights" blogDate="Posted on March 20, 2026"/>
                <BlogCard blogImg={blog2} blogTitle="RSA Unveils Next-Generation AI Vendor Stock Analysis at Global FinTech Summit" blogDate="Posted on February 10, 2026"/>
                <BlogCard blogImg={blog3} blogTitle="Navigating New Regulations: How Integrated Finance Stays Ahead with RSA" blogDate="Posted on January 15, 2026"/>
                <BlogCard blogImg={blog4} blogTitle="Top 5 Supply Chain Vulnerabilities Every Enterprise Must Address in 2026" blogDate="Posted on December 10, 2025"/>
            </div>
        </section>
    )
}

export default Blog;