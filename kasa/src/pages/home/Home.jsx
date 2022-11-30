import List from "../../components/list/List";
import HomeBanner from "../../components/home/Banner";

function HomePage() {
    return (
        <div style={{paddingTop: '2rem'} }>
            <HomeBanner />
            <List/>
        </div>
    );
}

export default HomePage;