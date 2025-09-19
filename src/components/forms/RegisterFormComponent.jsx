// react router dom
import { useNavigate } from "react-router"
// redux and slices
import { handleShowForms, registerUser } from "../../store/userSlice"
import { useDispatch } from "react-redux"
// formik & yup
import { useFormik } from "formik"
import * as Yup from "yup"

const RegisterFormComponent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        // values
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        // validation
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required("Required"),
            lastName: Yup.string()
                .required("Required"),
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string()
                .required("Required")
                .min(4, "Minimum 4 characters")
        }),
        // submit
        onSubmit: (values) => {
            dispatch(registerUser(values));
            navigate('/');
            formik.resetForm();
        }
    })

    const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name]


    return (
        <form className="formBox" onSubmit={formik.handleSubmit} >
            {/* inputs */}
            {/* First name */}
            <div className="inputWrap">
                <label htmlFor="firstName">First Name <span className="text-red texi-sm">{showError("firstName")}</span> </label>
                <input
                    className="inputFeeld"
                    type="text"
                    placeholder="Enter first name"
                    id="firstName"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                />
            </div>
            {/* Last name */}
            <div className="inputWrap">
                <label htmlFor="lastName">Last Name <span className="text-red texi-sm">{showError("lastName")}</span> </label>
                <input
                    className="inputFeeld"
                    type="text"
                    placeholder="Enter last name"
                    id="lastName"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                />
            </div>
            {/* Email */}
            <div className="inputWrap">
                <label htmlFor="email"> Email <span className="text-red texi-sm">{showError("email")}</span> </label>
                <input
                    className="inputFeeld"
                    type="email"
                    placeholder="Enter email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
            </div>
            {/* Password */}
            <div className="inputWrap">
                <label htmlFor=""> Password <span className="text-red texi-sm">{showError("password")}</span> </label>
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
            {/* submit */}
            <div className="flex flex-col items-center mt-4">
                <button type="submit" className="btn text-lightBlue">Register</button>
                <p>Already have an account? <span className="font-bold cursor-pointer" onClick={() => dispatch(handleShowForms())}>Login</span></p>
            </div>
        </form>
    )
}

export default RegisterFormComponent
