import axios from "axios";


class productsServices{
    static getAllProductsService =  () => axios.get("/products");
}

export default productsServices;