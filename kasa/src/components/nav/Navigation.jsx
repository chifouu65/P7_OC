import {Link} from "react-router-dom";

function NavigationBar() {
    return (
        <nav>
            <ul>
                <Link to={"/"} className="link">Home</Link>
                <Link to={"/about"} className="link">About</Link>
            </ul>
        </nav>
    )
}

export default NavigationBar