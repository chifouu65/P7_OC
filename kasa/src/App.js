
import {BrowserRouter} from "react-router-dom";

/* Components import */
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
/* Style */
import './global.style.css'
import Router from "./Router";
function App() {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Router />
            <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
