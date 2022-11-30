import data from '../../data.json'
import {Link} from "react-router-dom";


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
                                <Link to={`/product/${item.id}`}
                                      className='custom-off'
                                >
                                    {item.title}
                                </Link>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default List