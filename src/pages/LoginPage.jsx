import { useState } from "react"
// redux and slice
import { useDispatch } from "react-redux"
import { loginUser, registerUser } from "../store/userSlice"
// react router dom
import { Link } from "react-router"

const LoginPage = () => {

    const [haveAccount, setHaveAccount] = useState(true)
    const dispatch = useDispatch()

    const handleAccount = () => {
        setHaveAccount(!haveAccount)
    }

    return (
        <div className="wrapper py-8 px-4 lg:px-0">
            {haveAccount ?
                <>
                    {/* login form */}
                    <form className="formBox">
                        {/* inputs */}
                        <div className="inputWrap">
                            <label htmlFor="">Username</label>
                            <input className="inputFeeld" type="text" placeholder="Enter username" />
                        </div>
                        <div className="inputWrap">
                            <label htmlFor="">Password</label>
                            <input className="inputFeeld" type="password" placeholder="Enter password" />
                        </div>
                        {/* submit */}
                        <div className="flex flex-col items-center mt-4">
                            <Link to={'/'} onClick={() => dispatch(loginUser())} className="btn text-lightBlue" >Login</Link>
                            <p>Don't have an account? <span className="font-bold cursor-pointer" onClick={handleAccount}>Register</span></p>
                        </div>
                    </form>
                </> :
                <>
                    {/* register form */}
                    <form form className="formBox" >
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
                            <p>Already have an account? <span className="font-bold cursor-pointer" onClick={handleAccount}>Login</span></p>
                        </div>
                    </form>
                </>}
        </div >
    )
}

export default LoginPage
