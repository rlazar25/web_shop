import { useEffect } from "react"
// services
import categoriesServices from "../../services/categoriesServices"
// redux
import { useDispatch, useSelector } from "react-redux"
import { currentCategoryAction, saveAllCategoriesAction, toggleCategoryAction } from "../../store/categoriesSlice";

const CategoriesComponent = () => {

    const { allCategories, categoryToggle, categoryLoad, currentCategory } = useSelector(state => state.categoriesStore);
    const dispatch = useDispatch();

    useEffect(() => {
        categoriesServices.getAllCategoriesService()
            .then(res => dispatch(saveAllCategoriesAction(res.data)))
            .catch(err => console.log(err));
    }, [])

    const handleCurrentCategory = (category) => {
        dispatch(toggleCategoryAction());
        dispatch(currentCategoryAction(category));
    }

    return (
        <div className=" bg-midBlue text-lightBlue">
            <div className="wrapper mx-auto py-3 flex flex-wrap items-start justify-center lg:justify-between" >
                <div className="flex flex-col gap-2.5" >
                    {/* show categories and all categories buttons */}
                    <button
                        onClick={() => dispatch(toggleCategoryAction())}
                        className="btn"
                    >{categoryToggle ? 'Close' : 'Show'} Category</button>
                    <button
                        className={categoryToggle ? "btn" : "hidden"}
                        onClick={() => handleCurrentCategory("")}
                    >All Categories</button>
                </div>
                {/* all categories buttons */}
                {categoryToggle && <ul className="flex flex-wrap justify-center lg:justify-end my-4 lg:my-0 gap-2 lg:w-[80%] xl:w-[87%] ">
                    {categoryLoad && allCategories.map((category, index) => {
                        return <li
                            key={index}
                            onClick={() => handleCurrentCategory(category)}
                            className={currentCategory === category ? 'btnCategory bg-darkBlue text-lightBlue' : "btnCategory"}
                        >{category}</li>
                    })}
                </ul>}
            </div>
        </div>
    )
}

export default CategoriesComponent
