import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageDefault from "components/PageDefault";
import Footer from "components/Footer";
import Menu from "./components/Menu";
import First from './pages/First';
import AboutMe from './pages/AboutMe';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route index element={<First />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
        
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;