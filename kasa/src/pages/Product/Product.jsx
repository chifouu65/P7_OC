/**
 * Product Page Need (id) to get data from data.json
 */

import data from '../../data.json'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './product.css'
import {FaStar} from "react-icons/fa";
import Disclosure from "../../components/disclosure/Disclosure";

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

                            <img src={product.cover} alt={product.title}/>

                            <div className="product__header__info">
                                <div className="product__info">
                                    <div className="left">
                                        <h1>{product.title}</h1>
                                        <p>{product.location}</p>
                                    </div>
                                    <p>{product.tags}</p>
                                </div>

                                <div className="more">
                                    <div className="profile">
                                        <p>{product.host.name}</p>
                                        <img src={product.host.picture} alt={product.host.name}/>
                                    </div>
                                    <div className={'stars'}>
                                        <span><FaStar/></span>
                                        <span><FaStar/></span>
                                        <span><FaStar/></span>
                                        <span><FaStar/></span>
                                        <span><FaStar/></span>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <article className="content">
                            <Disclosure
                                title={'Description'}
                                content={product.description}
                            />

                            <Disclosure
                                title={'Equipment'}
                                content={
                                    product.equipments.map((item) => (
                                        <li key={item.id}>{item}</li>
                                    ))
                                }
                            />

                        </article>
                    </div>
                    :
                    <h1>Product Not Found</h1>
            }
        </>
    )
}

export default Product