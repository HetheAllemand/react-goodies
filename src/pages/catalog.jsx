import { useEffect, useState } from "react";
import Product from "../components/product";
import DataService from "../services/dataService";
import "./catalog.css";



function Catalog() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [prodsToDisplay, setProdsToDisplay] = useState([]);

    // const product = []

    //when the component loads, do something
    useEffect(function(){
        console.log("component loaded")
        loadCatalog();
    }, []);

    function loadCatalog() {
        // get the products from the service
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods); //put the results into state var
        setProdsToDisplay(prods);

        //todo: move this to a service
        let cats = ["brownie", "chocolate cupcake", "craberry scone", "croissant", "lemon cupcake", "rose cake", "salt cookie", "tart", "tartine", "vanilla bean cupcake"];
        setCategories(cats);
    }

    function filter(category){
        console.log(category);
        let list = [];
        //find the product that matches the category
        //and add it to the list
        for(let i=0; i< products.length; i++) {
            let prod = products[i];
            if(prod.category === category) {
                list.push(prod);
            }
        }
        setProdsToDisplay(list);
    }

    function clearFilter() {
        setProdsToDisplay(products);
    }

    return(
        <div className="catalog">
            <h1>Amazing New Products</h1>
            <h5>We have {products.length} products ready for you!</h5>

            <button onClick={clearFilter} className='btn btn-sm btn-primary btn-filter'>All</button>
            {categories.map(c => <button key={c} onClick={() => filter(c)} className='btn btn-sm btn-primary btn-filter'>{c}</button>)}
            <br />

            {prodsToDisplay.map( p => <Product key={p._id} data={p}></Product> )}
        </div>
        
    );
}
 
export default Catalog;