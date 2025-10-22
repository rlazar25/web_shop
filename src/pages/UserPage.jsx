// redux and slices
import { useDispatch, useSelector } from 'react-redux'
import { handleShowEdit, removeUser } from '../store/userSlice'
// react router dom
import { useNavigate } from 'react-router'
import EditFormComponent from '../components/forms/EditFormComponent'
// react icons
import { LiaUserEditSolid } from "react-icons/lia";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { clearFavoriteProductsAction } from '../store/favoriteSlice';
// custome hook
import useTopLoad from '../hooks/useTopLoad';
import { showToast } from '../utils/toastifyHelper';
import { toastifyMessages } from '../utils/toastifyMessages';


const UserPage = () => {

    const { user, userEditMenu, isLogged } = useSelector(state => state.userStore)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // remove user
    const handleRemoveUser = () => {
        dispatch(removeUser());
        dispatch(clearFavoriteProductsAction())
        navigate('/')
        showToast.error(toastifyMessages.user.delete)
    }

    // load page at top
    useTopLoad()

    return (
        <div className='wrapper flex flex-col justify-center items-center gap-2 py-[50px]'>
            {/* user info */}
            <div>
                <p className='text-3xl font-semibold mb-2.5'>{user.firstName} {user.lastName}</p>
                <p className='font-bold'>Email: <span className='font-semibold'>{user.email}</span></p>
                <p className='font-bold'>Gender: {user.gender ? <span className={user.gender === "male" ? "text-green font-semibold" : "text-red font-semibold"}>{user.gender}</span> : "Not specified"} </p>
                <p className='font-bold'>Date of Birth: {user.birthDate ? <span className='font-semibold'>{user.birthDate}</span> : "Not specified"}</p>
                <button onClick={() => dispatch(handleShowEdit())} className='flex items-end cursor-pointer gap-2 font-semibold underline mt-4 mx-auto'> {!isLogged ? "login to edit user" : "Edit user"} <LiaUserEditSolid size={20} /></button>
                <div
                    className='flex justify-center'
                    onClick={() => dispatch(handleShowEdit())}
                >
                    {!userEditMenu && isLogged ? <MdKeyboardArrowDown size={30} className='cursor-pointer' /> : <MdKeyboardArrowUp size={30} className='cursor-pointer' />}
                </div>
            </div>
            {/* edit user form*/}
            {isLogged && userEditMenu &&
                <div className='w-full flex flex-col justify-center items-center'>
                    <EditFormComponent />
                    <button
                        onClick={handleRemoveUser}
                        className='btn bg-red hover:bg-transparent text-lightBlue hover:text-red border-red mt-4'
                    >
                        Delete User
                    </button>
                </div>
            }
        </div>
    )
}

export default UserPage
