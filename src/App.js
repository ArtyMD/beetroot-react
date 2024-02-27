import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import News from "./components/News/News";
import { useState, useEffect } from "react";
function App() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (response.ok) {
          const posts = await response.json();
          setPosts(posts);
        } else {
          console.log("Error, Request failed");
          throw new Error("New Error");
        }
      } catch (e) {
        console.log(e);
      }
    }
    getPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header" styles="margin-bottom: 19px;">
        <Header />
      </header>
      <section>
        <Banner />
      </section>
      <div className="App-wrapper">
        <Blog posts={posts} />
        <News />
      </div>
    </div>
  );
}

export default App;
