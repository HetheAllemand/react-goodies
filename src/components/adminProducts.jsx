import "./adminProducts.css";
import { useState } from 'react';


function AdminProducts() {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);

    function textChanged(e) {
        let text = e.target.value;
        let attr = e.target.name;

        let copy = {...product};
        copy[attr] = text;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
        //todo: fix price, string shold be a number

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    return (<div className="ad-products">
        <h3>Create New Product</h3>

        <div className="my-control">
            <label className='form-label'>Title</label>
            <input name="title" onChange={textChanged} className='form-control' type="text"></input>
        </div>
        <div className="my-control">
            <label className='form-label'>Category</label>
            <input name="category" onChange={textChanged} className='form-control' type="text"></input>
        </div>
        <div className="my-control">
            <label className='form-label'>Image name</label>
            <input name="image" onChange={textChanged} className='form-control' type="text"></input>
        </div>
        <div className="my-control">
            <label className='form-label'>Price</label>
            <input name="price" onChange={textChanged} className='form-control' type="text"></input>
        </div>
        <div className="my-control center">
            <button onClick={saveProduct} className='btn btn-dark'>Save</button>
        </div>

        <ul>
        {allProducts.map(prod => <li key={prod.title}>{prod.title}</li>)}
        </ul>
    </div>)
}



export default AdminProducts;
