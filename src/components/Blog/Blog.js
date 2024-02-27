import "./Blog.css";
import BlogItem from "../BlogItem/BlogItem.js";

function Blog(props) {
  console.log(props.posts);
  return (
    <div className="Blog">
      <div>blog</div>

      <div>
        {props.posts.slice(0,9).map((item) => (
          <BlogItem key={item.id} title={item.title}/>
        ))}
      </div>
    </div>
  );
}

export default Blog;
