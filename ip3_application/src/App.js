import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import './App.css';
import { useJsApiLoader } from "@react-google-maps/api";

const MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;

const defaultCenter = {
  lat: 51.5072,
  lng: -0.1276
};

function App() {

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: MAP_API_KEY
    })

    if (!isLoaded) { 
      return <h1>Loading...</h1>
    }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="map" element={<Map center={defaultCenter}/>} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;