import NavigationBar from "../nav/Navigation";
import KasaLogo from "../logoKasa/_KasaLogo";

function HeaderComponent() {
    return (
        <header>
            <KasaLogo fill={'var(--primary-color)'} height={"68"} width={"211"}/>
            <NavigationBar />
        </header>
    )
}

export default HeaderComponent