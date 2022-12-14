
import {BrowserRouter} from "react-router-dom";
import Router from "./Router";
/* Components import */
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
/* Style */
import './global.style.css'

function App() {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Router />
            <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
