import './product.css';
import QuantityPicker from './quantityPicker';

function Product() {
    return(
        <div className="product">

            <img src="https://picsum.photos/240/200" alt="rando"></img>
            <h5>Title Here</h5>

            <div className="prices">
                <label>Total</label>
                <label>Price</label>
            </div>
            

            <QuantityPicker></QuantityPicker>
            <button class="btn btn-warning">Add to Cart</button>
        </div>
    );
}

export default Product;