import axios from "axios";

class productsServices {
  static getAllProductsService = (loadMore) => axios.get(`/products?limit=${loadMore}`);
}

export default productsServices;
