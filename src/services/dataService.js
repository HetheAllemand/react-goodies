import axios from 'axios';

var catalog = [
    {
        "title": "Brownie",
        "category": "brownie",
        "price": 3.59,
        "image": "brownie.jpeg",
        "_id": "1"
    },
    {
        "title": "Cholcolate Cupcake",
        "category": "chocolate cupcake",
        "price": 2.29,
        "image": "chocolate_cupcake.jpeg",
        "_id": "2"
    },
    {
        "title": "Cranberry Scone",
        "category": "craberry scone",
        "price": 3.49,
        "image": "cranberry_scone.jpeg",
        "_id": "3"
    },
    {
        "title": "Croissant",
        "category": "croissant",
        "price": 2.13,
        "image": "croissant.jpeg",
        "_id": "4"
    },
    {
        "title": "Lemon Cupcake",
        "category": "lemon cupcake",
        "price": 2.29,
        "image": "lemon_cupcake.jpeg",
        "_id": "5"
    },
    {
        "title": "Rose Cake",
        "category": "rose cake",
        "price": 12.49,
        "image": "rose_cake.webp",
        "_id": "6"
    },
    {
        "title": "Salt Cookie",
        "category": "salt cookie",
        "price": 3.87,
        "image": "salt_cookie.jpeg",
        "_id": "7"
    },
    {
        "title": "Tart",
        "category": "tart",
        "price": 4.25,
        "image": "tart.jpeg",
        "_id": "8"
    },
    {
        "title": "Tartine",
        "category": "tartine",
        "price": 1.29,
        "image": "tartine.jpeg",
        "_id": "9"
    },
    {
        "title": "Vanilla Bean Cupcake",
        "category": "vanilla bean cupcake",
        "price": 2.29,
        "image": "vanilla_bean_cupcake.jpeg",
        "_id": "10"
    },
];


class DataService {


    async getProducts() {
        let response = await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;

        // use the line below to test w/othe server - just uncomment
        // return catalog;
    }


async saveProduct(product) {
    let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
    return response.data;
}

}


export default DataService;