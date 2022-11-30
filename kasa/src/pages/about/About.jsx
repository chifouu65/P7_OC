import HomeBanner from "../../components/banner/Banner";
import photo from '../../assets/images/header_banner_about.png'
function AboutPage() {
    return (
        <div>
        <HomeBanner photo={photo} classZ={'about_banner_header'}>
            A propos
            <span>forkej</span>
        </HomeBanner>
        </div>
    );
}

export default AboutPage;