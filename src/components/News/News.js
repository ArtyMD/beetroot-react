import "./News.css";
import NewsItem from "../NewsItem/NewsItem";

function News() {
  return (
    <div className="News">
      News
      <div>
        {[1, 2, 3].map((item) => (
          <NewsItem key={item} />
        ))}
      </div>
    </div>
  );
}

export default News;
