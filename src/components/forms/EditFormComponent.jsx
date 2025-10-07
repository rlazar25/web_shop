// redux and slices
import { editUser } from "../../store/userSlice"
import { useDispatch, useSelector } from "react-redux"
// formik & yup
import { useFormik } from "formik"
import * as Yup from "yup"

const EditFormComponent = () => {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.userStore)

    const today = new Date()
    const minAgeDate = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
    );

    const formik = useFormik({
        // values
        initialValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            birthDate: user.birthDate,
            gender: user.gender,
        },
        // validation
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Required")
                .email(),
            password: Yup.string()
                .required("Required")
                .min(4, "Minimum 4 characters"),
            birthDate: Yup.date()
            .max(minAgeDate, "You must be 18 years old")
        }),
        // submit
        onSubmit: (values) => {
            dispatch(editUser(values));
        }
    })

    const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name]


    return (
        <form className="formBox w-full" onSubmit={formik.handleSubmit} >
            {/* inputs */}
            {/* First name */}
            <div className="inputWrap">
                <label htmlFor="firstName">First Name </label>
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
                <label htmlFor="lastName">Last Name </label>
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
                <label htmlFor=""> Password <span className="text-red texi-sm">{showError("password")}</span></label>
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
            {/* birth date */}
            <div className="inputWrap">
                <label htmlFor=""> Birth date <span className="text-red text-sm">{showError("birthDate")}</span> </label>
                <input
                    className="inputFeeld"
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formik.values.birthDate || ""}
                    onChange={formik.handleChange}
                />
            </div>
            {/* gender */}
            <div className="inputWrap">
                <label htmlFor="gender"> Gender </label>
                <div>
                    <input
                        className="inputFeeld"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        checked={formik.values.gender === "male"}
                        onChange={formik.handleChange}
                    /> <label htmlFor="male">Male</label>
                </div>

                <div>
                    <input
                        className="inputFeeld checked:bg-red"
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={formik.values.gender === "female"}
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="female">Female</label>
                </div>
            </div>
            {/* submit */}
            <div className="flex flex-col items-center mt-4">
                <button type="submit" className="btn text-lightBlue">Edit User</button>
            </div>
        </form>
    )
}

export default EditFormComponent
