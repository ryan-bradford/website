import "./Blog.css";
import Collapsible from "react-collapsible";
import Idempotency from "./Post/Idempotency";

const Blog = () => {
    return (
        <section className="section blog center" id="blog">
            <h2 className="section__title">Blog</h2>
            <Collapsible
                trigger="Idempotency - 9/9/23"
                triggerClassName="section__title blog-post-title"
                triggerOpenedClassName="section__title blog-post-title"
            >
                <Idempotency></Idempotency>
            </Collapsible>
        </section>
    );
};

export default Blog;
