import List from "../../components/list/List";
import HomeBanner from "../../components/banner/Banner";
import photo from '../../assets/images/header_banner_home.png'
import './home.css'

function HomePage() {
    return (
        <main>
            <HomeBanner
                photo={photo}
                classZ={'home_banner_header'}
            >
                Chez vous
                <span> partout et ailleurs</span>
            </HomeBanner>
            <List/>
        </main>
    );
}

export default HomePage;