import React from "react";
import blogData from "../data/blog";
import Header from './Header.js'
import ArticleList from "./ArticleList.js"
import About from "./About.js"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header  name={blogData.name}/>
      <ArticleList posts={blogData.posts}/>
      <About about={blogData.about} image={blogData.image}/>

    </div>
  );
}

export default App;
