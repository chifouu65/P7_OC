import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/Home";
import AboutPage from "./pages/about/About";
import Product from "./pages/Product/Product";
import NotFoundPage from "./pages/404/404";
function Router() {
    return (
        <>
            <Routes>
                <Route index path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path={`/product/:id`} element={<Product/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    )
}

export default Router;