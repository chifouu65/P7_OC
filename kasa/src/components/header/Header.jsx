import NavigationBar from "../nav/Navigation";
import KasaLogo from "../logoKasa/_KasaLogo";

function HeaderComponent() {
    return (
        <header className={'header'}>
            <KasaLogo
                classNamed={'header_logo'}
                fill={'var(--primary-color)'}
            />
            <NavigationBar />
        </header>
    )
}

export default HeaderComponent