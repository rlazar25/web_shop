// react router dom
import { Link } from "react-router"
// redux and slices
import { handleShowForms, registerUser } from "../../store/userSlice"
import { useDispatch } from "react-redux"
// formik & yup
import { useFormik } from "formik"
import * as Yup from "yup"

const RegisterFormComponent = () => {

    const dispatch = useDispatch()

    
    const formik = useFormik({
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
            username: Yup.string()
                .required("Required"),
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string()
                .required("Required")
        }),
        // 
        onSubmit: (values) => {
            formik.resetForm();
        }
    })

    return (
        <form className="formBox" >
            {/* inputs */}
            <div className="inputWrap">
                <label htmlFor="">First Name</label>
                <input className="inputFeeld" type="text" placeholder="Enter first name" />
            </div>
            <div className="inputWrap">
                <label htmlFor="">Last Name</label>
                <input className="inputFeeld" type="text" placeholder="Enter last name" />
            </div>
            <div className="inputWrap">
                <label htmlFor=""> Username</label>
                <input className="inputFeeld" type="text" placeholder="Enter username" />
            </div>
            <div className="inputWrap">
                <label htmlFor=""> Email</label>
                <input className="inputFeeld" type="email" placeholder="Enter email" />
            </div>
            <div className="inputWrap">
                <label htmlFor=""> Password</label>
                <input className="inputFeeld" type="password" placeholder="Enter password" />
            </div>
            {/* submit */}
            <div className="flex flex-col items-center mt-4">
                <Link to={'/'} onClick={() => dispatch(registerUser())} className="btn text-lightBlue">Register</Link>
                <p>Already have an account? <span className="font-bold cursor-pointer" onClick={() => dispatch(handleShowForms())}>Login</span></p>
            </div>
        </form>
    )
}

export default RegisterFormComponent
