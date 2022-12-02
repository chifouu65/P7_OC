import Rate from "../rating/Rating";
import '../../pages/Product/product.css'

function ProductHeader({...props}) {
    const {title, location, tags, hostName, hostPic, rating, key} = props;
    function Tags() {
        return (
            <>
                {
                    tags.map((tag, key) => (
                        <li key={key}>{tag}</li>
                    ))
                }
            </>
        )
    }
    return (
        <div className={'header_product'}>

            <div className={'product__text'}>
                <h1>{title}</h1>
                <p>{location}</p>
            </div>

            <div className={'product__profile'}>
                <p>{hostName}</p>
                <img style={{borderRadius: '50%'}} src={hostPic} alt={hostName}/>
            </div>

            <div className={'product__more'}>
                <ul className={'product__tags'} key={key}>
                    <Tags/>
                </ul>
                <ul className={'product__rating'}>
                    <Rate rating={rating}/>
                </ul>
            </div>

        </div>
    )
}

export default ProductHeader;