import { useEffect, useState } from "react"
// services
import categoriesServices from "../../services/categoriesServices"
// redux
import { useDispatch, useSelector } from "react-redux"
import { saveAllCategoriesAction, toggleCategoryAction } from "../../store/categoriesSlice";

const CategoriesComponent = () => {

    const {allCategories, categoryToggle, categoryLoad} = useSelector(state => state.categoriesStore);
    const dispatch = useDispatch();

    useEffect(() => {
        categoriesServices.getAllCategoriesService()
            .then(res => dispatch(saveAllCategoriesAction(res.data)))
            .catch(err => console.log(err));
    }, [])

    return (
    <div className=" bg-midBlue text-lightBlue">
            <div className="wrapper mx-auto py-3 flex flex-wrap items-start justify-center lg:justify-between" >
                <div >
                    <button onClick={() => dispatch(toggleCategoryAction())} className="btn">{categoryToggle ? 'Close' : 'Show'} Category</button>
                </div>
                {categoryToggle && <ul className="flex flex-wrap justify-center lg:justify-end my-4 lg:my-0 gap-2 lg:w-[80%] xl:w-[87%] ">
                    {categoryLoad && allCategories.map((category, index) => {
                        return <li className="w-[150px] text-center text-darkBlue hover:text-lightBlue hover:bg-darkBlue py-1 cursor-pointer border-darkBlue border-[2px] rounded-lg duration-200" key={index}>{category}</li>
                    })}
                </ul>}

            </div>
        </div>
    )
}

export default CategoriesComponent
