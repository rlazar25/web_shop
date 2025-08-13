import axios from "axios";

class productsServices {
  static getAllProductsService = (loadMore) => axios.get(`/products?limit=${loadMore}`);
  static getSingleProductService = (id) => axios.get(`/products/${id}`)
}

export default productsServices;
