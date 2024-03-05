import { useState, useEffect } from 'react'
import axiosInstance from "../../../axiosInstance"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Props = {}

function User({ }: Props) {
  const [userData, setUserData] = useState<any>([])
  const [userContact, setUserContact] = useState<any>([])
  const [userOrder, setUserOrder] = useState<any>([])
  const { userId } = useParams()

  useEffect(() => {

    const fetchUserData = async () => {

      const response = await axiosInstance.get(`/api/users/${userId}`)

      const data = response.data.user

      const userData = {
        fname: data.fname,
        lname: data.lname,
        email: data.email
      }

      setUserData(userData)
    }

    const fetchUserOrder = async () => {
      try {
        const response = await axiosInstance.get(`/api/orders/users/${userId}`)

      const data = response.data

      const orderDetails = data.map((item: any) => ({
        _id: item._id,
        date: new Date(item.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        fullfillmentStatus: item.fullfillmentStatus || 'Processing',
        paymentStatus: item.paymentStatus,
        totalPrice: item.totalPrice || null
      }))

      // console.log('order Details',orderDetails)
      setUserOrder(orderDetails)
      } catch (error) {
        console.log(error)
      }
      

    }

    const fetchUserContact = async () => {

      try {
        const response = await axiosInstance.get(`/api/contact/${userId}`)
      const data = response.data
      // console.log(data)

      const contact = {
        address: data.address,
        pincode: data.pincode,
        city: data.city,
        state: data.state,
        country: data.country,
        phoneNo: data.phoneNo
      }

      setUserContact(contact)
      } catch (error) {
        console.log(error)
      }

      
    }

    fetchUserData()
    fetchUserContact()
    fetchUserOrder()

    console.log(userContact)

  }, []);


  return (
    <div className='px-10'>
      <div className='flex flex-col justify-center items-center'>
        <div className='text-3xl p-5 pt-10 mx-10 font-bold'>
          My Account
        </div>
        <div className=' flex py-5 '>
          <h3>
            Welcome Back, {userData.fname}! <Link to="/login" className='underline italic'>Log Out</Link>
          </h3>

        </div>
      </div>

      <div className="">
        <h2 className='text-xl font-bold'>Account Details</h2>
            <span>
              {userData.fname} {userData.lname}
            </span>
            <br />
        {userContact.length!==0 ?
          <div className='flex flex-col py-3'>
            <span>
              {userContact.address}
            </span>
            <span>
              {userContact.pincode} {userContact.city} {userContact.state}
            </span>
            <span>
              {userContact.country}
            </span>
          </div> 
          :
          <Link to={`/user/${userId}/details`} className='cursor-pointer underline'>Add your Details</Link>
          // add a form component, common to this page and to checkout page
        }

      </div>

      {/* add a order detail page from clicking the number */}
      <div className="orders py-5">
        {userOrder.map((order: any, index: number) => (
          <div key={order._id || index} className='flex flex-col py-3'>
            <span className='pb-2'><b>Order number</b> : {order._id}</span>
            <span><b>Date</b>: {order.date}</span>
            <span><b>Payment Status</b>: {order.paymentStatus}</span>
            <span><b>Fulfillment Status</b>: {order.fullfillmentStatus}</span>
            <span><b>Total</b>: Rs {order.totalPrice}</span>
            <br />
            <hr />
          </div>
        ))}
      </div>


    </div>
  )
}

export default User