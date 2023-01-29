import "./quantityPicker.css";
import {useState} from 'react';

function QuantityPicker() {
    let [quantity, setQuantity] = useState(1);

function decrease() {
    if (quantity ===1) return;
    let val = quantity - 1;
    setQuantity(val);
}

function increase() {
    let val = quantity + 1;
    setQuantity(val);
}

    return(
        <div className="qt-picker">
            <button className="btn btn-dark btn-outline-success" disabled={quantity === 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-dark btn-outline-success" onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
