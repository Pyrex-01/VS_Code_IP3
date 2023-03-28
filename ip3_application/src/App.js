import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Map from "./pages/Map";
import BlogMainPage from "./pages/BlogMainPage";
import Post from "./pages/post";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import './App.css';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="home" element={<Home />} />
          <Route path="map" element={<Map />} />
          <Route path="blog" element={<BlogMainPage />} />
          <Route path="createPost" element={<BlogMainPage />} />
          <Route path="post" element={<Post />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
