import './product.css';
import QuantityPicker from './quantityPicker';
import { useEffect, useState, useContext } from 'react';
import DataContext from '../store/dataContext';


function Product(props) {

    const [quantity, setQuantity] = useState(1);

    useEffect(function(){
        // when component loads 
        console.log("Hello, I'm a product");
    }, []);

let addProductsToCart = useContext(DataContext).addProductsToCart;


    function onQuantityChange(qty) {
        console.log("new value:" + qty);
        setQuantity(qty);
    }

function getTotal() {

    let total = props.data.price * quantity;
    return total.toFixed(2);
}

function addProduct() {
    console.log("adding " + quantity + " " + props.data.title);
    // console.log(`Adding ${quantity} ${props.data.title}`);
}

function handleAdd() {
    console.log("Button clicked", props.data);
    addProductsToCart();
}

    return(
        <div className="product">

            <img src={"/images/" + props.data.image}alt="rando"></img>

            <h5>{props.data.title}</h5>

            <div className="prices">
                <label>${ getTotal() }</label>
                <label>${props.data.price.toFixed(2)}</label>
            </div>
            

            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>

            <button onClick={handleAdd} className="btn btn-warning">Add to Cart</button>
        </div>
    );
}

export default Product;