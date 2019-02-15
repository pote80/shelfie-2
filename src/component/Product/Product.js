import React from 'react';

const Product = props => {
    return (
        <div key={props.index}>
            <div><img src={props.product.img_url} alt='Product Img'></img></div>
            <h1>{props.product.product_name}</h1>
            <h3>${props.product.price}</h3>
            <button>Edit</button>
            <button onClick={() => props.deleteProduct(props.index)}>Delete</button>
        </div>
    );
}
export default Product;