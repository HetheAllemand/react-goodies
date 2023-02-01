var catalog = [
    {
        "title": "Brownie",
        "category": "brownie",
        "price": 12.49,
        "image": "brownie.jpeg",
        "_id": "1"
    },
    {
        "title": "Cholcolate Cupcake",
        "category": "chocolate cupcake",
        "price": 12.49,
        "image": "chocolate_cupcake.jpeg",
        "_id": "2"
    },
    {
        "title": "Cranberry Scone",
        "category": "craberry scone",
        "price": 12.49,
        "image": "cranberry_scone.jpeg",
        "_id": "3"
    },
    {
        "title": "Croissant",
        "category": "croissant",
        "price": 12.49,
        "image": "croissant.jpeg",
        "_id": "4"
    },
    {
        "title": "Lemon Cupcake",
        "category": "lemon cupcake",
        "price": 12.49,
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
        "price": 12.49,
        "image": "salt_cookie.jpeg",
        "_id": "7"
    },
    {
        "title": "Tart",
        "category": "tart",
        "price": 12.49,
        "image": "tart.jpeg",
        "_id": "8"
    },
    {
        "title": "Tartine",
        "category": "tartine",
        "price": 12.49,
        "image": "tartine.jpeg",
        "_id": "9"
    },
    {
        "title": "Vanilla Bean Cupcake",
        "category": "vanilla bean cupcake",
        "price": 12.49,
        "image": "vanilla_bean_cupcake.jpeg",
        "_id": "10"
    },
];


class DataService {


    getProducts() {
        // TODO: connect to server and retrieve products to display

        return catalog;
    }


}


export default DataService;