import React, { useState, useEffect } from "react";
import { getFullPosts } from "../../services/services";
import Categories from "./Categories";
import PostCard from "./PostCard";
import PostWidget from "./PostWidget";


const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getFullPosts()
      .then((data) => setPosts(data))
      .catch((err) => {
        setPosts([]);
        console.log(err.message);
      });
  }, []);

  return (
    <div className="conyainet mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <section className="lg:sticky relation top-8 ">
            <PostWidget />
            <Categories />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
