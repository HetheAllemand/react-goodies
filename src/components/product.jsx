import './product.css';
import QuantityPicker from './quantityPicker';
import { useEffect } from 'react';

function Product(props) {

    useEffect(function(){
        // when component loads 
        console.log("Hello, I'm a product");
    }, []);

    return(
        <div className="product">

            <img src={"/images/" + props.data.image}alt="rando"></img>

            <h5>{props.data.title}</h5>

            <div className="prices">
                <label>${props.data.price.toFixed(2)}</label>
                <label>${props.data.price.toFixed(2)}</label>
            </div>
            

            <QuantityPicker></QuantityPicker>
            <button className="btn btn-warning">Add to Cart</button>
        </div>
    );
}

export default Product;