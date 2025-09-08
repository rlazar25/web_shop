import axios from "axios";


class categoriesServices{
    static getAllCategoriesService = () => axios.get("/products/category-list");
    static getCategoryService = (category) => axios.get(`products/category/${category}`)
}

export default categoriesServices;