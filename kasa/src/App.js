
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
/* Pages import */
import HomePage from "./pages/home/Home";
import AboutPage from "./pages/about/About";
import Product from "./pages/Product/Product";
import NotFoundPage from "./pages/404/404";
/* Components import */
import FooterComponent from "./components/footer/Footer";
import Header from "./components/header/Header";
/* Style */
import './global.style.css'

function App() {
  return (
    <>
        <Router>
            <Header />
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path={`/product/:id`} element={<Product />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <FooterComponent />
        </Router>
    </>
  );
}

export default App;
