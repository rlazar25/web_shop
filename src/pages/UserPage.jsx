import { useState } from 'react'
// redux and slices
import { useDispatch, useSelector } from 'react-redux'
import { handleShowEdit, removeUser } from '../store/userSlice'
// react router dom
import { useNavigate } from 'react-router'
import EditFormComponent from '../components/forms/EditFormComponent'
// react icons
import { LiaUserEditSolid } from "react-icons/lia";

const UserPage = () => {

    const { user, userEditMenu } = useSelector(state => state.userStore)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // remove user
    const handleRemoveUser = () => {
        dispatch(removeUser());
        navigate('/')
    }
    return (
        <div className='wrapper flex flex-col justify-center items-center gap-2 py-[50px]'>
            {/* user info */}
            <div>
                <p className='text-3xl font-semibold mb-2.5'>{user.firstName} {user.lastName}</p>
                <p className='font-bold'>Email: <span className='font-semibold'>{user.email}</span></p>
                <p className='font-bold'>Gender: {user.gender ? <span className={user.gender === "male" ? "text-green font-semibold" : "text-red font-semibold"}>{user.gender}</span> : "Not specified"} </p>
                <p className='font-bold'>Date of Birth: {user.birthDate ? <span className='font-semibold'>{user.birthDate}</span> : "Not specified"}</p>
                <button onClick={() => dispatch(handleShowEdit())} className='flex items-center cursor-pointer gap-2 font-semibold underline mt-4 mx-auto'>Edit User <LiaUserEditSolid size={20} /></button>
            </div>
            {/* edit user form*/}
            {userEditMenu &&
                <div className='w-full flex flex-col justify-center items-center'>
                    <EditFormComponent />
                    <button
                        onClick={handleRemoveUser}
                        className='btn bg-red hover:bg-transparent text-lightBlue hover:text-red border-red mt-4'
                    >
                        Delete User
                    </button>
                </div>}
        </div>
    )
}

export default UserPage
