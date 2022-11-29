import data from '../../data.json'


function List() {
    return (
        <div className={'home_body'}>
            <div className="home_list">
                {/*
                  {data.map((item) => (
                    <div className="home_list_item">
                        <div className="home_list_item_img">
                            <img src={item.img} alt=""/>
                        </div>
                        <div className="home_list_item_title">
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))}
                */}
                {
                    data.map((item) =>
                        (
                            <div className="home_list_item ">
                                <h2>{item.title}</h2>
                                <img
                                    width={340}
                                    height={340}
                                    src={item.cover}
                                    color={'red'}/>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default List