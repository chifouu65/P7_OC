import data from '../../data.json'
import {Link} from "react-router-dom";
function List() {
    return (
        <div className={'home_body'}>
            <div className="home_list">
                {
                    data.map((item) =>
                        (
                            <Link
                                key={item.id}
                                to={`/product/${item.id}`}
                                className="home_list_item">
                                <img
                                alt={item.title}
                                style={{borderRadius: '15px',}} width={340} height={340}
                                src={item.cover}/>
                                <h4 className='custom-off'>
                                    {item.title}
                                </h4>


                            </Link>
                        ))
                }
            </div>
        </div>
    )
}

export default List