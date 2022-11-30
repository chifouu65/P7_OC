import data from '../../data.json'


function List() {
    return (
        <div className={'home_body'}>
            <div className="home_list">
                {
                    data.map((item) =>
                        (
                            <div className="home_list_item" key={item.id}>
                                <img
                                alt={item.title}
                                    style={{
                                        borderRadius: '15px',
                                    }}
                                    width={340}
                                    height={340}
                                    src={item.cover}
                                    />
                                <h2>{item.title}</h2>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default List