import axios from "axios";


class categoriesServices{
    static getAllCategoriesService = () => axios.get("/products/category-list");
}

export default categoriesServices;