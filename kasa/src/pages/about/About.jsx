import HomeBanner from "../../components/banner/Banner";
import photo from '../../assets/images/header_banner_about.png'
import Disclosure from "../../components/disclosure/Disclosure";
import './about.css'

function AboutPage() {
    return (
        <main>
        <HomeBanner photo={photo} classZ={'about_banner_header'}/>
        <section className="about_content">
            <Disclosure
                title={'Fiabilité'}
                content={`
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                mise en page avant impression. Le Lorem Ipsum est le faux texte standard de 
                l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                `}/>
            <Disclosure
                title={'Respect'}
                content={`
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la 
                mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie 
                depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                `}/>
            <Disclosure
                title={'Service'}
                content={`
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en 
                page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les 
                années 1500, quand un imprimeur anonyme assembla ensemble
                `}/>
            <Disclosure
                title={'Responsabilité'}
                content={`
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en 
                page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis 
                les années 1500, quand un imprimeur anonyme assembla ensemble
                `}/>
        </section>
        </main>
    );
}

export default AboutPage;