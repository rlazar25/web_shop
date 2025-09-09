import axios from "axios";

class productsServices {
  static getAllProductsService = (loadMore) => axios.get(`/products?limit=${loadMore}`);
  static getSingleProductService = (id) => axios.get(`/products/${id}`);
  static searchProductsService = (search) => axios.get(`products/search?q=${search}`)
}

export default productsServices;
