import { useState, useEffect } from 'react'
import { getUserIdFromToken } from '../../../utils';
import axiosInstance from "../../../axiosInstance"

type Props = {}

function User({ }: Props) {
  const [userData, setUserData] = useState<any>([])
  const [userId, setUserId] = useState('')


  useEffect(() => {
    const fetchUserData = async () => {
      const userId = getUserIdFromToken()
      setUserId(userId || '')

      const response = await axiosInstance.get(`/api/users/${userId}`)

      const data = response.data.user
      console.log(data)
      const userData = {
        fname: data.fname,
        lname: data.lname,
        email: data.email
      }

      setUserData(userData)
    }

    fetchUserData()


  }, []);



  console.log('In User Page', userId)
  console.log(userData)

  return (
    <div className='px-10'>
      <div className='flex flex-col justify-center items-center'>
        <div className='text-3xl p-5 pt-10 mx-10 font-bold'>
          My Account
        </div>
        <div className=' flex py-5 '>
          <h3>
            Welcome Back, {userData.fname}! <a href="" className='underline italic'>Log Out</a>
          </h3>

        </div>
      </div>


{/* Make an account details model, refer it to users model, and map address */}
      <div className="">
        <h2 className='text-xl font-bold'>Account Details</h2>
        <div className='flex flex-col py-3'>
          <span>
            {userData.fname} {userData.lname}
          </span>
          <span>
            Address 1
          </span>
          <span>
            Pin Code City State
          </span>
          <span>
            Country
          </span>
        </div>
      </div>

{/* make another table with these info and render via map */}
      <div className="orders py-5">
        <div className='flex flex-col py-3'>
          <span>
            Date: 23 Jan, 2024
          </span>
          <span>
            Payment Status: Paid
          </span>
          <span>
            Fulfillment Status: Fulfilled
          </span>
          <span>
            Total: Rs 1093
          </span>
        </div>
        <hr />
        <div className='flex flex-col py-3'>
          <span>
            Date: 2 Jan, 2024
          </span>
          <span>
            Payment Status: Paid
          </span>
          <span>
            Fulfillment Status: Fulfilled
          </span>
          <span>
            Total: Rs 990
          </span>
        </div>

      </div>

    </div>
  )
}

export default User