/**
 * Product Page Need (id) to get data from data.json
 */
import data from '../../data.json'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './product.css'
import Disclosure from "../../components/disclosure/Disclosure";
import ProductHeader from "../../components/product/ProductHeader";

function Product() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const product = data.find(item => item.id === params.id);
        setProduct(product);
    })
    return (
        <main className={'product_container'}>
            {
                product ?
                    <div className="product" key={product.id}>
                        <div className="product__header">
                            <img src={product.cover} alt={product.title}/>
                            <ProductHeader
                                title={product.title}
                                location={product.location}
                                tags={product.tags}
                                hostName={product.host.name}
                                hostPic={product.host.picture}
                                rating={product.rating}
                                key={product.id}
                            />

                        </div>
                        <div className="product__disc">
                            <Disclosure
                                title={'Description'}
                                content={product.description}
                            />
                            <Disclosure
                                title={'Equipment'}
                                styleText={
                                    {
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }
                                }
                                content={
                                    product.equipments.map((item) => (
                                        <li key={item.id}>{item}</li>
                                    ))
                                }
                            />
                        </div>
                    </div>

                    :
                    <h1>Product Not Found</h1>
            }
        </main>
    )
}

export default Product