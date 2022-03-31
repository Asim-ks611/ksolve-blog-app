import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import PostMain from "./components/post/PostMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/posts/:slug" element={<PostMain/>} />
      </Route>
    </Routes>
  );
}

export default App;
