// redux and slices
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../store/userSlice'
// react router dom
import { useNavigate } from 'react-router'

const UserPage = () => {

    const { user } = useSelector(state => state.userStore)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // remove user
    const handleRemoveUser = () => {
        dispatch(removeUser());
        navigate('/')
    }
    return (
        <div className='wrapper flex flex-col justify-center items-start gap-2 py-[50px]'>
            <p className='text-2xl'>{user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
            <button onClick={handleRemoveUser} className='btn bg-red hover:bg-transparent text-lightBlue hover:text-red border-red mt-4'>Delete User</button>
        </div>
    )
}

export default UserPage
