import './cart.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './../store/dataContext';

function Cart() {

    const cart = useContext(DataContext).cart;
    return (
        <div className="cart">
            
            <h1>Do you want Dem Goodies</h1>
            <h4>{cart.length} Goodies want you, just click and enjoy!</h4>
            {cart.map((prod)=>(
                <div className="prod-row">
                <img src={'/images/' + prod.image} alt=""></img>
                <h6>{prod.title}</h6>
                <label>{prod.quantity}</label>
                <label>{prod.price * prod.quantity}</label>
                <button className='btn btn-sm btn-danger'>Delete</button>
                </div>
            ))}
            <div>
            {/* <ul className="cart-map">
                {cart.map(prod => <li> {prod.title} </li>)}
            </ul> */}
            </div>
            
            <Link className='btn btn-primary btn-sm' to="/catalog">Check out our amazing catalog</Link>
        </div>
    );
}

export default Cart;