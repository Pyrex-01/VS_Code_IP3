import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Map from "./pages/Map";
import MainPage from "./pages/BlogMainPage";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/post";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import './App.css';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="map" element={<Map />} />
          <Route path="blog" element={<MainPage />} />
          <Route path="createPost" element={<CreatePost />} />
          <Route path="post/:postId" element={<Post />}/>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
