import "./adminProducts.css";
import { useState, useEffect } from 'react';
import DataService from "../services/dataService";


function AdminProducts() {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);

useEffect(function(){
    loadProducts();
}, []);

async function loadProducts() {
    let service = new DataService();
    let prods = await service.getProducts();
    setAllProducts(prods);
}


function textChanged(e) {
    let text = e.target.value;
    let attr = e.target.name;

    let copy = {...product};
    copy[attr] = text;
    setProduct(copy);
 }

    function saveProduct() {
        console.log(product);
        let savedProd = {...product};
        savedProd.price = parseFloat(savedProd.price);
        let service = new DataService();
        service.saveProduct(savedProd);
        
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
        {allProducts.map(prod => <li key={prod.title}>{prod.title} -${prod.price}</li>)}
        </ul>
    </div>)
}



export default AdminProducts;
