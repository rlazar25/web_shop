// redux 
import { useSelector } from "react-redux"
// components
import RegisterFormComponent from "../components/forms/RegisterFormComponent"
import LoginFormComponent from "../components/forms/LoginFormComponent"

const LoginPage = () => {

    const { showForms } = useSelector(state => state.userStore)

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
