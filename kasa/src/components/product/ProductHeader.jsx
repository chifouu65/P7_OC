import Rate from "../rating/Rating";
import '../../pages/Product/product.css'
import Tags from "../tags/Tags";

function ProductHeader({...props}) {
    const {title, location, tags, hostName, hostPic, rating} = props;
    return (
        <div className={'header_product'}>
            <div className={'first'}>
                <h1>{title}</h1>
                <p>{location}</p>
                <ul className={'product__tags'} >
                    <Tags Object={tags}/>
                </ul>
            </div>
            <div className={'second'}>
                <div className={'product__profile'}>
                    <p>{hostName}</p>
                    <img style={{borderRadius: '50%'}} src={hostPic} alt={hostName}/>
                </div>
                <ul className={'product__rating'}>
                    <Rate rating={rating}/>
                </ul>
            </div>
        </div>
    )
}

export default ProductHeader;