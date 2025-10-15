// formik & yup
import { useFormik } from "formik";
import * as Yup from "yup";
// material ui
import { Rating, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addReviewAction } from "../../store/singleProductSlice";

const AddCommentComponent = () => {

    const {isLogged} = useSelector(state => state.userStore)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            reviewerName: "",
            reviewerEmail: "",
            comment: "",
            rating: 0,
        },
        validationSchema: Yup.object({
            reviewerName: Yup.string()
                .required("Required"),
            reviewerEmail: Yup.string()
                .email("Invalid email")
                .required("Required"),
            comment: Yup.string()
                .required("Required"),
            rating: Yup.number()
                .min(1, "Select rating")
                .required("Required"),
        }),
        onSubmit: (values, {setStatus}) => {
            if(isLogged) {
                dispatch(addReviewAction(values))
                formik.resetForm()
            } else {
                setStatus("You must log in!")
            }
        },
    });

    const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name]

    return (
        <form onSubmit={formik.handleSubmit} className="formBox">
            <div className="inputWrap">
                <label htmlFor="reviewerName">Name <span className="text-red text-sm">{showError("reviewerName")}</span></label>
                <input
                    id="reviewerName"
                    className="inputFeeld"
                    type="text"
                    placeholder="Enter name"
                    name="reviewerName"
                    value={formik.values.reviewerName}
                    onChange={formik.handleChange}
                />
            </div>

            <div className="inputWrap">
                <label htmlFor="reviewerEmail">Email <span className="text-red text-sm">{showError("reviewerEmail")}</span></label>
                <input
                    id="reviewerEmail"
                    className="inputFeeld"
                    type="text"
                    placeholder="Enter email"
                    name="reviewerEmail"
                    value={formik.values.reviewerEmail}
                    onChange={formik.handleChange}
                />
            </div>

            <div className="inputWrap">
                <label htmlFor="comment">Comment <span className="text-red text-sm">{showError("comment")}</span></label>
                <input
                    id="comment"
                    className="inputFeeld"
                    type="text"
                    placeholder="Enter comment"
                    name="comment"
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                />
            </div>

            <div className="inputWrap">
                <label htmlFor="rating">Rating {formik.touched.rating && formik.errors.rating && (
                    <span className="text-red text-sm">{formik.errors.rating}</span>
                )}</label>
                <Box>
                    <Rating
                        name="rating"
                        value={formik.values.rating}
                        onChange={(e, value) => formik.setFieldValue("rating", value)}
                    />
                </Box>
            </div>

            <button type="submit" className="btn text-lightBlue">
                Add Comment
            </button>
            <p className="text-red text-center">{formik.status}</p>
        </form>
    );
};

export default AddCommentComponent;
