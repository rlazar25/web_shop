// react router dom
import { Link, useNavigate } from "react-router"
// redux and slices
import { useDispatch, useSelector } from "react-redux"
import { handleShowForms, loginUser } from "../../store/userSlice"
// formik & yup
import { useFormik } from "formik"
import * as Yup from "yup"

const LoginFormComponent = () => {

    const { user } = useSelector(state => state.userStore)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Required"),
            password: Yup.string()
                .required("Required")
        }),
        onSubmit: (values, {setStatus} ) => {
            if (values.email === user.email && values.password === user.password) {
                dispatch(loginUser());
                navigate('/');
                formik.resetForm();
            } else {
                setStatus("Email or password is incorect");
            }
        }
    })

    const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name]

    return (
        <form onSubmit={formik.handleSubmit} className="formBox">
            {/* inputs */}
            <div className="inputWrap">
                <label htmlFor="email">
                    Email <span className="text-red text-sm">{showError("email")}</span>
                </label>
                <input
                    className="inputFeeld"
                    type="text"
                    placeholder="Enter email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
            </div>
            <div className="inputWrap">
                <label htmlFor="password">
                    Password <span className="text-red text-sm">{showError("password")}</span>
                </label>
                <input
                    className="inputFeeld"
                    type="password"
                    placeholder="Enter password"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
            </div>
            {formik.status && <span className="text-red">{formik.status}</span>}
            {/* submit */}
            <div className="flex flex-col items-center mt-4">
                <button type="submit" className="btn text-lightBlue" >Login</button>
                <p>Don't have an account? <span className="font-bold cursor-pointer" onClick={() => dispatch(handleShowForms())}>Register</span></p>
            </div>
        </form>
    )
}

export default LoginFormComponent
