/**
 * Product Page Need (id) to get data from data.json
 */

import data from '../../data.json'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Product() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const product = data.find(item => item.id === params.id);
        setProduct(product);
    })

    return (
        <>
            {
                product ?
                    <div className="product" key={product.id}>

                        <div className="product__header">
                            <div className="product__img">
                                <img src={product.cover} alt={product.title}/>
                            </div>

                            <div className="product__info">
                                <div className="left">
                                    <h1>{product.title}</h1>
                                    <p>{product.location}</p>
                                </div>
                                <div className="right">
                                    <p>{product.host.name}</p>
                                    <img src={product.host.picture} alt={product.host.name}/>
                                </div>
                            </div>

                            <div className="more">
                                <p>{product.tags}</p>
                                <span>{product.rating}</span>
                            </div>
                        </div>

                        <article className="content">
                            <div className="description">
                                <h2>Description</h2>
                                <p>{product.description}</p>
                            </div>
                            <div className="equipment">
                                <h2>Equipment</h2>
                                <ul>
                                    {
                                        product.equipments.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </article>
                    </div>
                    :
                    <h1>Product Not Found</h1>
            }
        </>
    )
}

export default Product