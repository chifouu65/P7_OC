import {Link} from "react-router-dom";

function NavigationBar() {
    return (
        <nav className={'nav'}>
            <ul className={"nav__list"}>
                <Link to={"/"} className="nav__link">Home</Link>
                <Link to={"/about"} className="nav__link">About</Link>
            </ul>
        </nav>
    )
}

export default NavigationBar