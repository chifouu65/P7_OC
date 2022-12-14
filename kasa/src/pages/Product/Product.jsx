/**
 * Product Page Need (id) to get data from data.json
 */
import data from '../../data.json'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './product.css'
import Disclosure from "../../components/disclosure/Disclosure";
import ProductHeader from "../../components/product/ProductHeader";
import NotFoundPage from "../404/404";

function Product() {
    const params = useParams();
    const [product, setProduct] = useState(null);

    // Get product data from data.json by id from params (url) and set it to product state
    useEffect(() => {
        let selectedProduct = data.find((item) => item.id === params.id);
        setProduct(selectedProduct);
    }, [params.id]);

    return (
        <>
            {
                product ?
                     <main className={'product_container'} key={product.id}>
                        <div className="product">
                            <div className="product__header">
                                <img src={product.cover} alt={product.title}/>
                                <ProductHeader
                                    title={product.title}
                                    location={product.location}
                                    tags={product.tags}
                                    rating={product.rating}
                                    hostName={product.host.name}
                                    hostPic={product.host.picture}
                                    key={product.id}
                                />

                            </div>
                            <div className="product__disc">
                            <span>
                                <Disclosure
                                    title={'Description'}
                                    content={product.description}
                                />
                            </span>
                                <span>
                                <Disclosure
                                    title={'Equipment'}
                                    styleText={
                                        {
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }
                                    }
                                    content={
                                    <div>
                                        {
                                            product.equipments.map((item) => (
                                                <li key={item.length}>{item}</li>
                                            ))
                                        }
                                    </div>
                                    }
                                />
                            </span>
                            </div>
                        </div>
                    </main>
                    :
                    <NotFoundPage/>
            }
        </>
    )
}

export default Product