import List from "../../components/list/List";

function HomePage() {
    return (
        <div style={{paddingTop: '2rem'} }>
            <div className={'home_header'}>
                <h1 className={'home_header_title'}>
                    <span className={'home_header_title_span'}>
                        Chez vous,
                        <span> partout et ailleurs</span>
                    </span>
                    <br/>
                </h1>
            </div>
            <List/>
        </div>
    );
}

export default HomePage;