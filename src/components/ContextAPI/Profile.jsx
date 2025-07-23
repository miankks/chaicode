import React, { useContext} from 'react'
import UserContext from './UserContext'

const Profile = () => {
  const {user} = useContext(UserContext)

  if (!user) return <div>Please login</div>
  return (
    <>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Profile</div>
      <div>
        <h3>Welcome {user.username}</h3>
      </div>
    </>
  )
}

export default Profile