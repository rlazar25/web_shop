// redux 
import { useSelector } from "react-redux"
// components
import RegisterFormComponent from "../components/forms/RegisterFormComponent"
import LoginFormComponent from "../components/forms/LoginFormComponent"
// custome hook
import useTopLoad from "../hooks/useTopLoad"

const LoginPage = () => {

    const { showForms } = useSelector(state => state.userStore)

    // load page at top
    useTopLoad()
    
    return (
        <div className="wrapper py-8 px-4 lg:px-0">
            {showForms ?
                <LoginFormComponent /> :
                <RegisterFormComponent />
            }
        </div >
    )
}

export default LoginPage
